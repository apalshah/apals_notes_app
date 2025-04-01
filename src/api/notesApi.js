export const getNotes = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    return Promise.resolve(notes);
};

export const createNote = (newNote) => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const createdTime = new Date().toISOString();
    const note = { ...newNote, id: `note-${Date.now()}`, createdTime };
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
    return Promise.resolve(note);
};
