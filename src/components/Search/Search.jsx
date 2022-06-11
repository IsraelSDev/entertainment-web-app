import "./Search.sass";

import React from 'react';
import searchIcon from '../../assets/search.svg';
import Input from '@mui/material/Input';

const ariaLabel = { 'aria-label': 'description' };

const Search = () => {
  return (
    <div className='Search'>
      <img src={searchIcon} alt='search-icon' />
      <Input defaultValue="Oie" inputProps={ariaLabel} color="secondary" />
    </div>
  );
}

export default Search;
