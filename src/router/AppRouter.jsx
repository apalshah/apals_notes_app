import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotesListPage from "../pages/NotesListPage";
import NoteDetailsPage from "../pages/NotesDetailsPage";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<NotesListPage />} />
      <Route path="/notes/:id" element={<NoteDetailsPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
