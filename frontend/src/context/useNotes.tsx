import { useContext } from "react";
import { NoteContext } from "./NoteContext";

export const useNotes = () => {
  const context = useContext(NoteContext);
  if (!context) throw new Error("useNotes must be used within a NoteProvider");
  return context;
};
