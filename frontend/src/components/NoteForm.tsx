import { ChangeEvent, FormEvent, useState } from "react";
import { useNotes } from "../context/useNotes";

export default function NoteForm() {
  const [note, setNote] = useState({
    title: "",
    description: "",
    isArchived: false,
  });

  const { createNote } = useNotes();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setNote({ ...note, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createNote(note);
    console.log(note);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
          placeholder="Write a title"
          onChange={handleChange}
        />
        <textarea
          name="description"
          rows={3}
          className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
          placeholder="Write a description"
          onChange={handleChange}
        ></textarea>
        <label
          htmlFor="isArchived"
          className="inline-flex items-center gap-x-2"
        >
          <input
            type="checkbox"
            name="isArchived"
            id="isArchived"
            className="h-5 w-5 text-indigo-600"
            onChange={(e) => {
              setNote({ ...note, isArchived: !note.isArchived });
            }}
          />
          <span>Archive</span>
        </label>
        <button className="bg-indigo-500 px-3 block py-2 w-full">Save</button>
      </form>
    </div>
  );
}
