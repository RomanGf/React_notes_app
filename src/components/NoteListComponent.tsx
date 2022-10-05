import React from "react";
import "./NoteListComponent.styles.css";
import { useDispatch } from "react-redux";
import noteActions from "../redux/actions/noteActions";
import { Note } from "../models/note.model";

export const NoteList = ({
  notes,
}: {
  notes: Note[];
}) => {
  const dispatch = useDispatch();

  const updateNoteArchiving = (note: Note) => {
    note.archived = !note.archived;
    dispatch(noteActions.updateNote(note.id, note));
  };

  const deleteNote = (id: number) => {
    dispatch(noteActions.deleteNote(id));
  };

  const deleteAllNote = () => {
    dispatch(noteActions.deleteAllNote());
  };

  const toggleArchiving = () => {
    dispatch(noteActions.archiveMode());
  };

  const editingNote = (note: Note) => {
    dispatch(noteActions.editNote(note));
  };

  return (
    <div className="NoteItem__container flex flex-col justify-around rounded">
      <div className="notes__header-row flex justify-around rounded w-full">
        <div className="notes__header-item f-grow">Name</div>
        <div className="notes__header-item">Created</div>
        <div className="notes__header-item">Category</div>
        <div className="notes__header-item">Content</div>
        <div className="notes__header-item f-grow">Dates</div>
        <div className="notes__header-item flex justify-around">
          <i
            className="fa-solid fa-box-archive m-x-sm"
            onClick={() => toggleArchiving()}
          ></i>
          <i className="fa-solid fa-trash m-x-sm" onClick={deleteAllNote}></i>
        </div>
      </div>
      {notes.map((item) => {
        return (
          <div className="notes__row flex justify-around rounded w-full items-center" key={item.id}>
            <p className="notes__header-item"> {item.title} </p>
            <p className="notes__header-item"> {item.date_created} </p>
            <p className="notes__header-item"> {item.category} </p>
            <p className="notes__header-item">{item.content}</p>
            <p className="notes__header-item"> {item.dates} </p>
            <p className="notes__header-item flex justify-around">
              <i
                className="fa-solid fa-pen"
                onClick={() => editingNote(item)}
              ></i>
              {item.archived ? (
                <i
                  className="fa-solid fa-box-open m-x-sm"
                  onClick={() => updateNoteArchiving(item)}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-box m-x-sm"
                  onClick={() => updateNoteArchiving(item)}
                ></i>
              )}

              <i
                className="fa-solid fa-trash m-x-sm"
                onClick={() => deleteNote(item.id)}
              ></i>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default NoteList;
