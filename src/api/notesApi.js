import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = "notes";

export const getNotes = () => {
  const notes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  return Promise.resolve(notes);
};

export const createNote = (newNote) => {
  const notes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const createdTime = new Date().toISOString();
  const note = { ...newNote, id: uuidv4(), createdTime };
  notes.push(note);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  return Promise.resolve(note);
};

export const updateNote = (updatedNote) => {
  const notes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const updated = notes.map((n) => (n.id === updatedNote.id ? updatedNote : n));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return Promise.resolve(updatedNote);
};

export const deleteNote = (id) => {
  const notes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const updated = notes.filter((n) => n.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return Promise.resolve();
};