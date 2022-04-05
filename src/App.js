import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import RepoPage from "./pages/RepoPage";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users/:username/repos" element={<UserPage />} />
        <Route path="/users/:username/repos/:repo" element={<RepoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
