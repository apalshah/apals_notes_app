import React, { useState, useEffect } from "react";
import { getNotes, createNote, deleteNote } from "../api/notesApi";
import NotesList from "../components/NotesList";
import AppModal from "../components/AppModal";
import NoteItem from "../components/NoteItem";

const NotesListPage = () => {
  const [notes, setNotes] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);

  // Pagination
  const [page, setPage] = useState(1);
  const notesPerPage = 10;
  const totalPages = Math.ceil(notes.length / notesPerPage);

  const paginatedNotes = notes.slice(
    (page - 1) * notesPerPage,
    page * notesPerPage
  );

  useEffect(() => {
    getNotes().then(setNotes);
  }, []);

  const handleCreate = async (newNote) => {
    const created = await createNote(newNote);
    setNotes((prev) => [...prev, created]);
    setShowCreateModal(false);
  };

  const confirmDelete = (id) => {
    const note = notes.find((n) => n.id === id);
    setNoteToDelete(note);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    if (noteToDelete) {
      await deleteNote(noteToDelete.id);
      setNotes((prev) => prev.filter((note) => note.id !== noteToDelete.id));
      setNoteToDelete(null);
      setShowDeleteModal(false);
    }
  };

  return (
    <>
      <div className="container mt-4" data-testid="notes-list-page">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4>My Notes</h4>
          <button
            className="btn btn-primary"
            onClick={() => setShowCreateModal(true)}
            data-testid="create-button"
          >
            + Create
          </button>
        </div>

        <NotesList notes={paginatedNotes} onDelete={confirmDelete} />

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="d-flex justify-content-between align-items-center mt-3">
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
            >
              Previous
            </button>
            <span className="text-muted small">
              Page {page} of {totalPages}
            </span>
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <AppModal
          title="Create New Note"
          show={showCreateModal}
          onClose={() => setShowCreateModal(false)}
        >
          <NoteItem
            onSave={handleCreate}
            onCancel={() => setShowCreateModal(false)}
            submitLabel="Create"
          />
        </AppModal>
      )}

      {/* Confirm Delete Modal */}
      {showDeleteModal && noteToDelete && (
        <AppModal
          title="Delete Note"
          show={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          footerButtons={[
            <button
              key="cancel"
              className="btn btn-secondary"
              onClick={() => setShowDeleteModal(false)}
            >
              Cancel
            </button>,
            <button
              key="delete"
              className="btn btn-danger"
              onClick={handleDelete}
            >
              Delete
            </button>,
          ]}
        >
          <p>
            Are you sure you want to delete <strong>{noteToDelete.title}</strong>?
          </p>
          <p className="text-muted small">
            This action cannot be undone and the note will be permanently removed.
          </p>
        </AppModal>
      )}
    </>
  );
};

export default NotesListPage;
