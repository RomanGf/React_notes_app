import { Actions } from "../actions/noteActions";
import { ActionTypes } from "../actionTypes";
import { Note } from "../../models/note.model";

export interface NoteState {
  notes: Note[];
  archiveMode: boolean;
  showModal: boolean;
  editingNote: Note | null;
}

const initialState: NoteState = {
  notes: [] as Note[],
  archiveMode: false,
  showModal: false,
  editingNote: null,
};

export default (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.ADD_NOTE: {
      const notes = [...state.notes];
      notes.push(action.note);
      return {
        ...state,
        notes,
      };
    }
    case ActionTypes.UPDATE_NOTE: {
      const { id, note } = action;
      const notes = [...state.notes];
      const index = notes.indexOf(notes.find((x: Note) => x.id === id) as Note);
      notes[index] = note;
      return {
        ...state,
        notes,
      };
    }
    case ActionTypes.DELETE_NOTE: {
      const { id } = action;
      const notes = state.notes.filter((x) => x.id !== id);
      return {
        ...state,
        notes,
      };
    }
    case ActionTypes.DELETE_ALL_NOTES: {
      const notes = state.notes.filter((x) => x.archived !== state.archiveMode);
      return {
        ...state,
        notes,
      };
    }
    case ActionTypes.ARCHIVE_MODE: {
      return {
        ...state,
        archiveMode: !state.archiveMode,
      };
    }
    case ActionTypes.SHOW_MODAL: {
      return {
        ...state,
        showModal: !state.showModal,
      };
    }
    case ActionTypes.EDITING_NOTE: {
      const { note } = action;
      return {
        ...state,
        editingNote: note,
      };
    }
    default:
      return state;
  }
};
