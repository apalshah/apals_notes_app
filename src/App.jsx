import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import AppRouter from "./router/AppRouter";

const App = () => (
  <div>
    <Header />
    <AppRouter />
  </div>
);

export default App;
