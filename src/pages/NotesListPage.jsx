import React, { useEffect, useState } from "react";
import { getNotes } from "../api/notesApi";
import NotesList from "../components/NotesList";

const NotesListPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes().then(setNotes);
  }, []);

  return (
    <div className="container mt-4">
      <h2>All Notes</h2>
      <NotesList notes={notes} />
    </div>
  );
};

export default NotesListPage;