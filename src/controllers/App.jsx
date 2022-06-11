import React from "react";
import "./App.sass";
import Search from "../components/Search/Search";
import InputForm from "../components/InputForm/InputForm";
import ButtonCustom from "../components/ButtonCustom/ButtonCustom";
import NotFoundPage from "../pages/NotFound/NotFound.page";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/" element={<InputForm />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
