import React, { useState } from "react";
import "./ModalComponent.style.css";
import { useDispatch } from "react-redux";
import noteActions from "../redux/actions/noteActions";
import { Note } from "../models/note.model";
import { getConcatenatedDatesFromString } from "../utils/dateUtils";

export const Modal = ({ note }: { note: Note | null }) => {
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
      <div className="modal fixed">
        <div className="modal__content absolute">
          <label className="modal__close-icon">
            <i
              className="fa-solid fa-circle-xmark"
              onClick={() => closeModal()}
            ></i>
          </label>
          <div>
            <input
              className="min-w-400 w-full rounded-md border-solid
                         border-2 border-gray-500 p-2 m-2 text-xs"
              type="text"
              placeholder="Note title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <input
              className="min-w-400 w-full rounded-md border-solid
                         border-2 border-gray-500 p-2 m-2 text-xs"
              type="text"
              id="note_new_desc"
              placeholder="Note content"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div>
            <select
              className="w-full p-2 m-2 text-xs rounded-md 
                         border-solid border-2 border-gray-500"
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
            className="btn p-2 rounded-md text-white "
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
