import "./App.sass";

import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { MoviesContext } from "../context/moviesContext";
import { authContext } from "../context/authenticatorContext";
import { SectionContext } from '../context/sectionContext';

import HomePage from "../pages/Home/Home.page.jsx";
import LoginPage from "../pages/Login/Login.page";
import SignUpPage from "../pages/SignUp/SignUp.page";
import NotFoundPage from "../pages/NotFound/NotFound.page";

function App() {

  const { isAuthenticated } = useContext(authContext);

  useEffect(() => {
    if (!isAuthenticated) {
      <Navigate to="/login" />
    } else if (isAuthenticated) {
      <Navigate to="/home" />
    }
  }, [isAuthenticated]);

  return (
    <div className="App">
      <MoviesContext>
        <SectionContext>
          <Router>
            {
              isAuthenticated ? (
                <Routes>
                  <Route path="/" element={<Navigate to="/home" />} />
                  <Route path="/home" element={<HomePage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              ) : (
                <Routes>
                  <Route path="/" element={<Navigate to="/login" />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignUpPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              )
            }
          </Router>
        </SectionContext>
      </MoviesContext >
    </div >
  );
}

export default App;
