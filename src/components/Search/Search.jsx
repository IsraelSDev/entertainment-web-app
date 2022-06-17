import "./Search.sass";

import React, { useContext, useEffect, useState } from 'react';
import searchIcon from '../../assets/search.svg';
import Input from '@mui/material/Input';

import { sectionContext } from "../../context/sectionContext";
import { favoriteContext } from "../../context/favoriteContext";
import { moviesContext } from '../../context/moviesContext';



const Search = () => {

  const { movies, setMovies } = useContext(moviesContext);
  const { section } = useContext(sectionContext);
  const { favoriteMovie, handlefavoriteMovie } = useContext(favoriteContext);

  const [unFilteredMovies, setUnFilteredMovies] = useState([...movies]);
  const [unFilteredFavoriteMovies, setUnFilteredFavoriteMovies] = useState([...favoriteMovie]);

  const handleSearch = (e) => {
    const search = e.target.value;

    if (section === 'Bookmarked') {
      console.log('Bookmarked');
      const filteredMovies = unFilteredFavoriteMovies.filter(item => item.title.toString().toLowerCase().includes(search.toLowerCase()));
      search === '' ? handlefavoriteMovie(unFilteredFavoriteMovies) : handlefavoriteMovie(filteredMovies);
    } else {
      console.log('Not Bookmarked');
      const filteredMovies = unFilteredMovies.filter(item => item.title.toString().toLowerCase().includes(search.toLowerCase()));
      search === '' ? setMovies(unFilteredMovies) : setMovies(filteredMovies);
    }

  }


  return (
    <div className='Search'>
      <img src={searchIcon} alt='search-icon' />
      <Input onChange={
        (e) => {
          handleSearch(e)
        }
      } placeholder="Search for movies or TV series" color="secondary" />
    </div>
  );
}

export default Search;
