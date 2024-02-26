import { CreateNote, UpdateNote } from "../interfaces/note.interface";

const API = "http://localhost:3000/api";

export const createNoteRequest = (note: CreateNote) =>
  fetch(`${API}/notes`, {
    method: "POST",
    body: JSON.stringify(note),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getNoteRequest = () => fetch(`${API}/notes`);

export const deleteNoteRequest = (id: number) =>
  fetch(`${API}/notes/${id}`, {
    method: "DELETE",
  });

export const updateNoteRequest = (id: number, note: UpdateNote) =>
  fetch(`${API}/notes/${id}`, {
    method: "PATCH",
    body: JSON.stringify(note),
    headers: {
      "Content-Type": "application/json",
    },
  });
