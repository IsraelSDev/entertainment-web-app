import "./Home.page.sass";
import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import { moviesContext } from '../../context/moviesContext';
import axios from 'axios'
import { sectionContext } from '../../context/sectionContext';

import NavBar from "../../components/NavBar/NavBar";
import Search from '../../components/Search/Search';
import Movies from '../../components/Movies/Movies';
import Series from '../../components/Series/Series';
import Bookmarked from '../../components/Bookmarked/Bookmarked';
import Trending from '../../components/Trending/Trending';




const HomePage = () => {

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
  const { section } = useContext(sectionContext);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (<>
    <div className="Home-container">
      <NavBar />
      <div className="Search-container">
        <Search />
        <div className="content-container">
          {
            section === 'Trending' ? (
              <Trending />
            )
              : section === 'Movies' ? (
                <Movies movies={movies} />
              )
                : section === 'Series' ? (
                  <Series />
                )
                  : section === 'Bookmarked' ? (
                    <Bookmarked />
                  )
                    : null
          }
        </div>
      </div>
    </div>
  </>);
}

export default HomePage;
