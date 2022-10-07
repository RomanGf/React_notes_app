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
    <div className="InputSection__container flex flex-col items-center ">
      <input
        className="min-w-400 w-full rounded-md border-solid
                  border-2 border-gray-500 p-2 m-2 text-xs"
        type="text"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="min-w-400 w-full rounded-md border-solid
                   border-2 border-gray-500 p-2 m-2 text-xs"
        value={content}
        placeholder="Note content"
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <select
        className="w-full p-2 m-2 text-xs rounded-md 
                   border-solid border-2 border-gray-500"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Task">Task</option>
        <option value="Random Thought">Random Thought</option>
        <option value="Idea">Idea</option>
      </select>
      <div className="InputSection__container__btnWrapper flex flex-row mt-2">
        <button className=" text-xs text-white border-2 p-2 rounded-md " onClick={addNote}>ADD NOTE</button>
      </div>
    </div>
  );
};

export default InputSection;
