import React, { useState } from "react";
import DOMPurify from "dompurify";


const NoteItem = ({
  initialNote = {},
  onSave,
  onCancel,
  onDelete,
  submitLabel = "Save",
}) => {
  const [title, setTitle] = useState(initialNote.title || "");
  const [content, setContent] = useState(initialNote.content || "");
  const [errors, setErrors] = useState({});

  const TITLE_MAX_LENGTH = 50;
  const CONTENT_MAX_LENGTH = 200;

  const validate = () => {
    const errs = {};
    if (!title.trim()) {
      errs.title = "Title is required.";
    } else if (title.length > TITLE_MAX_LENGTH) {
      errs.title = `Title must be under ${TITLE_MAX_LENGTH} characters.`;
    }

    if (content.length > CONTENT_MAX_LENGTH) {
      errs.content = `Content must be under ${CONTENT_MAX_LENGTH} characters.`;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
  
    const cleanTitle = DOMPurify.sanitize(title.trim());
    const cleanContent = DOMPurify.sanitize(content.trim());
  
    onSave({
      ...initialNote,
      title: cleanTitle,
      content: cleanContent,
    });
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="note-title" className="form-label">
          Title
        </label>
        <input
          type="text"
          id="note-title"
          className={`form-control ${errors.title ? "is-invalid" : ""}`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title"
          maxLength={TITLE_MAX_LENGTH}
        />
        <div className="d-flex justify-content-between">
          {errors.title ? (
            <div className="invalid-feedback d-block">{errors.title}</div>
          ) : (
            <span className="text-muted" style={{ flex: 1 }}></span>
          )}
          <small
            className={`text-muted ${
              title.length > TITLE_MAX_LENGTH * 0.9 ? "text-danger" : ""
            }`}
          >
            {title.length}/{TITLE_MAX_LENGTH}
          </small>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="note-content" className="form-label">
          Content
        </label>
        <textarea
          id="note-content"
          className={`form-control ${errors.content ? "is-invalid" : ""}`}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Note content"
          rows="4"
          maxLength={CONTENT_MAX_LENGTH}
        />
        <div className="d-flex justify-content-between">
          {errors.content ? (
            <div className="invalid-feedback d-block">{errors.content}</div>
          ) : (
            <span className="text-muted" style={{ flex: 1 }}></span>
          )}
          <small
            className={`text-muted ${
              content.length > CONTENT_MAX_LENGTH * 0.9 ? "text-danger" : ""
            }`}
          >
            {content.length}/{CONTENT_MAX_LENGTH}
          </small>
        </div>
      </div>

      <div className="d-flex justify-content-end gap-2">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          {submitLabel}
        </button>
      </div>
    </form>
  );
};

export default NoteItem;
