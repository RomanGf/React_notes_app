import React, { useState } from "react";
import "./ModalComponent.style.css";
import { useDispatch } from "react-redux";
import noteActions from "../redux/actions/noteActions";
import { Note } from "../models/note.model";
import { getConcatenatedDatesFromString } from "../utils/dateUtils";

const Modal = ({ note }: { note: Note | null }) => {
  const showHideClassName = note ? "modal display-block" : "modal display-none";

  const [title, setTitle] = useState(note?.title);
  const [content, setContent] = useState(note?.content);
  const [category, setCategory] = useState("Task");

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(noteActions.editNote(null));
  };

  const updateAndClose = () => {
    if (title && content && category && note) {
      note.title = title;
      note.content = content;
      note.category = category;
      note.dates = getConcatenatedDatesFromString(content);
      dispatch(noteActions.updateNote(note.id, note));
    }
    dispatch(noteActions.editNote(null));
  };

  return (
    <div className={showHideClassName}>
      <div className="modal">
        <div className="modal__content">
          <label className="modal__close-icon">
            <i
              className="fa-solid fa-circle-xmark"
              onClick={() => closeModal()}
            ></i>
          </label>
          <div>
            <input
              id="note_new_title"
              type="text"
              placeholder="Note title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              id="note_new_desc"
              placeholder="Note content"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div>
            <select
              id="note__category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="Task">Task</option>
              <option value="Random Thought">Random Thought</option>
              <option value="Idea">Idea</option>
            </select>
          </div>
          <button
            className="btn"
            id="update_btn"
            onClick={() => updateAndClose()}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
