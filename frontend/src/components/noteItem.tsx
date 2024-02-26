import { useState } from "react";
import { useNotes } from "../context/useNotes";
import { CreateNote, Note } from "../interfaces/note.interface";
import {
  IoArchive,
  IoArchiveOutline,
  IoTrash,
  IoPencil,
} from "react-icons/io5";

interface Props {
  note: Note;
}

export function NoteItem({ note }: Props) {
  const { deleteNote, updateNote } = useNotes();
  const [editNote, setEditNote] = useState<CreateNote | null>(null);
  const openEditModal = () => {
    setEditNote(note);
  };

  const closeEditModal = () => {
    setEditNote(null);
  };

  const handleEditSubmit = () => {
    if (editNote) {
      updateNote(note.id, {
        title: editNote.title,
        description: editNote.description,
      });
      closeEditModal();
    }
  };

  return (
    <div
      key={note.id}
      className="bg-gray-900 p-2 my-2 flex justify-between hover:bg-gray-800 hover:cursor-pointer"
    >
      <div>
        <h1>{note.title}</h1>
        <p>{note.description}</p>
      </div>
      <div className="flex gap-x-2">
        <IoPencil onClick={openEditModal} />
        {note.isArchived ? (
          <IoArchive
            onClick={() => {
              updateNote(note.id, { isArchived: !note.isArchived });
            }}
          />
        ) : (
          <IoArchiveOutline
            onClick={() => {
              updateNote(note.id, { isArchived: !note.isArchived });
            }}
          />
        )}

        <IoTrash
          onClick={async () => {
            if (!window.confirm("Are you sure you wat to delete this note?"))
              return;
            await deleteNote(note.id);
          }}
        />
        {editNote && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-900 p-4 rounded-md text-white">
              <h2 className="text-2xl font-bold mb-2">Edit Note</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleEditSubmit();
                }}
              >
                <label htmlFor="editTitle">Title:</label>
                <input
                  type="text"
                  id="editTitle"
                  name="title"
                  value={editNote.title || ""}
                  onChange={(e) =>
                    setEditNote({
                      ...editNote,
                      title: e.target.value,
                    })
                  }
                  className="mb-2 p-2 border bg-gray-900 border-gray-300 rounded-md w-full"
                />
                <label htmlFor="editDescription">Description:</label>
                <textarea
                  id="editDescription"
                  name="description"
                  value={editNote.description || ""}
                  onChange={(e) =>
                    setEditNote({
                      ...editNote,
                      description: e.target.value,
                    })
                  }
                  className="mb-2 p-2 border bg-gray-900 border-gray-300 rounded-md w-full"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded-md"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={closeEditModal}
                  className="ml-2 bg-gray-500 text-white p-2 rounded-md"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
