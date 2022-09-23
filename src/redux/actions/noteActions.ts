import { Note } from "../../models/note.model";
import { ActionTypes } from "../actionTypes";

interface AddNoteAction {
  type: ActionTypes.ADD_NOTE;
  note: Note;
}
interface UpdateNoteAction {
  type: ActionTypes.UPDATE_NOTE;
  id: number;
  note: Note;
}
interface DeleteNoteAction {
  type: ActionTypes.DELETE_NOTE;
  id: number;
}
interface DeleteAllNoteAction {
  type: ActionTypes.DELETE_ALL_NOTES;
}
interface ArchiveModeAction {
  type: ActionTypes.ARCHIVE_MODE;
}
interface ShowModalAction {
  type: ActionTypes.SHOW_MODAL;
}
interface EditNoteAction {
  type: ActionTypes.EDITING_NOTE;
  note: Note;
}

export default {
  addNote: (note: Note) => ({
    type: ActionTypes.ADD_NOTE,
    note,
  }),
  updateNote: (id: number, note: Note) => ({
    type: ActionTypes.UPDATE_NOTE,
    id,
    note,
  }),
  deleteNote: (id: number) => ({
    type: ActionTypes.DELETE_NOTE,
    id,
  }),
  deleteAllNote: () => ({
    type: ActionTypes.DELETE_ALL_NOTES,
  }),
  archiveMode: () => ({
    type: ActionTypes.ARCHIVE_MODE,
  }),
  showModal: () => ({
    type: ActionTypes.SHOW_MODAL,
  }),
  editNote: (note: Note | null) => ({
    type: ActionTypes.EDITING_NOTE,
    note,
  }),
};

export type Actions =
  | AddNoteAction
  | UpdateNoteAction
  | DeleteAllNoteAction
  | DeleteNoteAction
  | ArchiveModeAction
  | ShowModalAction
  | EditNoteAction;
