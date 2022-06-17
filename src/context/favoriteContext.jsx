import React, { createContext, useState } from 'react';

const favoriteContext = createContext();

const FavoriteContext = ({ children }) => {

  const [favoriteMovie, handlefavoriteMovie] = useState([]);

  return (
    <favoriteContext.Provider value={{ favoriteMovie, handlefavoriteMovie }} >
      {children}
    </favoriteContext.Provider >
  );
}

export { FavoriteContext, favoriteContext };
