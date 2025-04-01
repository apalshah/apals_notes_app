export const getNotes = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    return Promise.resolve(notes);
  };