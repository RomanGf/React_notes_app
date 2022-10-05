import React, { useState } from "react";
import { useDispatch } from "react-redux";
import noteActions from "../redux/actions/noteActions";
import "./NoteCreationComponent.style.css";
import { getConcatenatedDatesFromString } from "../utils/dateUtils";

export const InputSection = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Task");
  const [archived, setArchived] = useState(false);

  const addNote = () => {
    if (title && content && category) {
      dispatch(
        noteActions.addNote({
          id: Math.random(),
          title,
          content,
          category,
          date_created: new Date().toLocaleDateString(),
          dates: getConcatenatedDatesFromString(content),
          archived,
        })
      );
    }
    setTitle("");
    setContent("");
    setCategory("Task");
  };

  return (
    <div className="InputSection__container">
      <input
        className="note__creation-title"
        type="text"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="note__creation-content"
        value={content}
        placeholder="Note content"
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <select
        value={category}
        id="note__category"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Task">Task</option>
        <option value="Random Thought">Random Thought</option>
        <option value="Idea">Idea</option>
      </select>
      <div className="InputSection__container__btnWrapper">
        <button onClick={addNote}>ADD NOTE</button>
      </div>
    </div>
  );
};

export default InputSection;
