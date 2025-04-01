import React from "react";
import { formatDate } from "../utils/formatter";
import { useNavigate } from "react-router-dom";

const NotesList = ({ notes, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="p-3">
      {notes.length === 0 ? (
        <p>No notes available.</p>
      ) : (
        <ul className="list-group">
          {notes.map((note) => (
            <li
              key={note.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{note.title}</strong>
                <div className="text-muted small">
                  {formatDate(note.createdTime)}
                </div>
              </div>

              <div className="btn-group" role="group">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => navigate(`/notes/${note.id}`)}
                  title="Edit note"
                  aria-label={`Edit ${note.title}`}
                >
                  ✏️
                </button>

                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => onDelete(note.id)}
                  title="Delete note"
                  aria-label={`Delete ${note.title}`}
                  data-testid="delete-btn"
                >
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotesList;
