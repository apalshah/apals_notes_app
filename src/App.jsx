import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./router/AppRouter";
import Header from "./components/Header";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <div className="bg-light min-vh-100">
        <Header />
        <div className="container px-2 px-sm-3 px-md-4 px-lg-5">
          <AppRouter />
        </div>
      </div>
    </AuthProvider>
  );
};

export default App;