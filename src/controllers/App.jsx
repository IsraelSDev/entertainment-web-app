import "./App.sass";

import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { MoviesContext } from "../context/moviesContext";
import { authContext } from "..//context/authenticatorContext";

import HomePage from "../pages/Home/Home.page.jsx";
import LoginPage from "../pages/Login/Login.page";
import SignUpPage from "../pages/SignUp/SignUp.page";
import NotFoundPage from "../pages/NotFound/NotFound.page";

function App() {

  const { isAuthenticated } = useContext(authContext);

  const location = useLocation();

  return (
    <div className="App">
      <MoviesContext>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Login" exact element={<LoginPage />} />
            <Route path="/SignUp" exact element={<SignUpPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </MoviesContext>
    </div >
  );
}

export default App;
