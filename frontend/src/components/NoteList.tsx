import { Note } from "../interfaces/note.interface";
import { useNotes } from "../context/useNotes";
import { NoteItem } from "./noteItem";
import { useState } from "react";

export default function NoteList() {
  const { notes } = useNotes();
  const [filter, setFilter] = useState<string>("all");

  const filteredNotes = notes.filter((note: Note) => {
    if (filter === "archived") {
      return note.isArchived === true;
    } else if (filter === "unarchived") {
      return note.isArchived === false;
    }
    return true; // 'all' filter or any other case
  });

  return (
    <div>
      <div className="mb-4 mt-4">
        <button
          onClick={() => setFilter("all")}
          className={
            filter === "all"
              ? "bg-blue-500 text-white p-2 rounded-md mr-2"
              : "bg-gray-500 text-white p-2 rounded-md mr-2"
          }
        >
          All
        </button>
        <button
          onClick={() => setFilter("archived")}
          className={
            filter === "archived"
              ? "bg-blue-500 text-white p-2 rounded-md mr-2"
              : "bg-gray-500 text-white p-2 rounded-md mr-2"
          }
        >
          Archived
        </button>
        <button
          onClick={() => setFilter("unarchived")}
          className={
            filter === "unarchived"
              ? "bg-blue-500 text-white p-2 rounded-md"
              : "bg-gray-500 text-white p-2 rounded-md"
          }
        >
          Unarchived
        </button>
      </div>
      {filteredNotes.map((note: Note) => (
        <NoteItem note={note} key={note.id} />
      ))}
    </div>
  );
}
