import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getNotes, updateNote, deleteNote } from "../api/notesApi";
import NoteItem from "../components/NoteItem";

const NoteDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);

  useEffect(() => {
    getNotes().then((notes) => {
      const found = notes.find((n) => n.id === id);
      if (found) {
        setNote(found);
      } else {
        navigate("/");
      }
    });
  }, [id, navigate]);

  const handleUpdate = async (updatedNote) => {
    await updateNote(updatedNote);
    navigate("/");
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      await deleteNote(note.id);
      navigate("/");
    }
  };

  if (!note) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <h4>Edit Note</h4>
      <NoteItem
        initialNote={note}
        onSave={handleUpdate}
        onCancel={() => navigate("/")}
        submitLabel="Save"
      />
    </div>
  );
};

export default NoteDetailsPage;
