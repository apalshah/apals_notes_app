import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotesListPage from "../pages/NotesListPage";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<NotesListPage />} />
    </Routes>
  </Router>
);

export default AppRouter;