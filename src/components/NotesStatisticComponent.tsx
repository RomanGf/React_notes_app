import React from "react";
import "./NotesStatisticComponent.style.css";
import { Note } from "../models/note.model";

export const NotesStatistic = ({ notes }: { notes: Note[] }) => {
  const categories: { [key: string]: Note[] } = {
    Idea: [],
    Task: [],
    "Random Thought": [],
  };

  notes.forEach((element) => {
    if (Object.keys(categories).includes(element.category)) {
      categories[element.category].push(element);
    }
  });

  Object.entries(categories).forEach(([key, value]) => {});

  return (
    <div>
      <div className="notes__header-row flex justify-around rounded py-2">
        <div className="notes__category-item f-grow">Note Category</div>
        <div className="notes__category-item">Active</div>
        <div className="notes__category-item f-grow">Archived</div>
      </div>
      {Object.entries(categories).map(([key, values]) => {
        return values.length === 0 ? (
          ""
        ) : (
          <div className="notes__row flex justify-around rounded py-2" key={key}>
            <p className="notes__header-item">{key}</p>
            <p className="notes__header-item">
              {values.filter((x: Note) => !x.archived).length}
            </p>
            <p className="notes__header-item">
              {values.filter((x: Note) => x.archived).length}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default NotesStatistic;
