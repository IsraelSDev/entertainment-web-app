import "./Home.page.sass";
import React, { useContext, useState, useEffect } from 'react';
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

  const { movies, setMovies } = useContext(moviesContext);
  const { section } = useContext(sectionContext);

  const options = {
    method: 'GET',
    url: 'https://movies-app1.p.rapidapi.com/api/movies',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
    }
  };

  const fetchMovies = async () => {
    const response = await axios.request(options).then(function (response) {
      setMovies(response.data.results);
    })
      .catch((error) => {
        throw new Error(error);
      });
  }

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
                  <Series movies={movies} />
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