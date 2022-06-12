import React, { createContext, useState } from 'react';

const moviesContext = createContext();

const MoviesContext = ({ children }) => {

  const [movies, setMovies] = useState([{ name: 'Loading' }]);

  return (
    <moviesContext.Provider value={{ movies, setMovies }} >
      {children}
    </moviesContext.Provider >
  );
}

export { MoviesContext, moviesContext };
