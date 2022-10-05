import React from "react";
import { useSelector } from "react-redux";
import NoteList from "./NoteListComponent";
import "./NoteDashboardComponent.style.css";
import NotesStatistic from "./NotesStatisticComponent";
import Modal from "./ModalComponent";
import { NoteState } from "../redux/reducers/notes";

interface SomeIn {
  notes: NoteState;
}

const NoteDashboard = () => {
  const notes = useSelector((state: SomeIn) => state.notes.notes);
  const archiveMode = useSelector((state: SomeIn) => state.notes.archiveMode);
  const editingNote = useSelector((state: SomeIn) => state.notes.editingNote);

  if (notes.length === 0) {
    return (
      <div className="NotesSection__container__empty">
        <p>There is no note yet. Please add one.</p>
      </div>
    );
  }

  return (
    <div className="NotesSection__container">
      <NoteList
        notes={notes.filter((x) => x.archived === archiveMode)}
      />
      <Modal note={editingNote} />
      <NotesStatistic notes={notes} />
    </div>
  );
};

export default NoteDashboard;
