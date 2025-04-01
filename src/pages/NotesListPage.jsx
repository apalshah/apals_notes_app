import React, { useState, useEffect } from "react";
import { getNotes, createNote } from "../api/notesApi";
import NotesList from "../components/NotesList";
import Header from "../components/Header";
import CreateModal from "../components/CreateModal";
import NoteItem from "../components/NoteItem";

const NotesListPage = () => {
    const [notes, setNotes] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        getNotes().then(setNotes);
    }, []);

    const handleCreate = async (newNote) => {
        const created = await createNote(newNote);
        setNotes((prev) => [...prev, created]);
        setShowModal(false);
    };

    return (
        <>
            <div className="container mt-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4>My Notes</h4>
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            console.log("Create clicked");
                            setShowModal(true);
                        }}
                    >
                        + Create
                    </button>
                </div>
                <NotesList notes={notes} />
            </div>

            {showModal && (
                <CreateModal
                    title="Create New Note"
                    show={showModal} // Add this!
                    onClose={() => setShowModal(false)}
                >
                    <NoteItem
                        onSave={handleCreate}
                        onCancel={() => setShowModal(false)}
                        submitLabel="Create"
                    />
                </CreateModal>
            )}
        </>
    );
};

export default NotesListPage;
