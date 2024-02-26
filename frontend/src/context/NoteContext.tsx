import React, { createContext, useEffect, useState } from "react";
import {
  createNoteRequest,
  deleteNoteRequest,
  getNoteRequest,
  updateNoteRequest,
} from "../api/notes";
import { CreateNote, Note, UpdateNote } from "../interfaces/note.interface";

interface NoteContextValue {
  notes: Note[];
  createNote: (note: CreateNote) => Promise<void>;
  deleteNote: (id: number) => Promise<void>;
  updateNote: (id: number, note: UpdateNote) => Promise<void>;
}

export const NoteContext = createContext<NoteContextValue>({
  notes: [],
  createNote: async () => {},
  deleteNote: async () => {},
  updateNote: async () => {},
});

interface Props {
  children: React.ReactNode;
}

export const NoteProvider: React.FC<Props> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  useEffect(() => {
    getNoteRequest()
      .then((response) => response.json())
      .then((data) => setNotes(data));
  }, []);

  const createNote = async (note: CreateNote) => {
    const res = await createNoteRequest(note);
    const data = await res.json();
    setNotes([...notes, data]);
  };
  const deleteNote = async (id: number) => {
    const res = await deleteNoteRequest(id);
    if (res.status == 204 || res.status == 200) {
      setNotes(notes.filter((note) => note.id != id));
    }
    console.log(res);
  };

  const updateNote = async (id: number, note: UpdateNote) => {
    const res = await updateNoteRequest(id, note);
    const data = await res.json();
    setNotes(
      notes.map((note) => (note.id == id ? { ...note, ...data } : note))
    );

    console.log(data);
  };
  return (
    <NoteContext.Provider value={{ notes, createNote, deleteNote, updateNote }}>
      {children}
    </NoteContext.Provider>
  );
};
