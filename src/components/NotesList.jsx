import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatter";

const NotesList = ({ notes }) => (
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
            <div className="d-flex flex-column">
              <span className="fw-semibold">{note.title}</span>
              <small className="text-muted">{formatDate(note.createdTime)}</small>
            </div>
            <Link
              to={`/note/${note.id}`}
              className="btn btn-sm btn-outline-secondary"
              aria-label={`Edit note titled ${note.title}`}
              title="Edit"
            >
              ✏️
            </Link>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default NotesList;