import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios'
import { moviesContext } from '../../context/moviesContext';


const HomePage = () => {

  const location = useLocation();

  
  const fetchMovies = async () => {
    const response = await axios
      .get(`https://isstudio-movies-api.herokuapp.com/movies`)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  const { movies, setMovies } = useContext(moviesContext);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page</p>
    </div>
  );
}

export default HomePage;
