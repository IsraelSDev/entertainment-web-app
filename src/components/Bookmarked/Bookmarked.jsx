import React, { useContext } from 'react';
import { favoriteContext } from '../../context/favoriteContext';
import Card from '../../components/Card/Card';

const Bookmarked = () => {

  const { favoriteMovie } = useContext(favoriteContext);

  return (
    <div>
      <h1>Bookmarked</h1>
      <div className='movies-container'>
        {favoriteMovie.map(movie => (
          <div className='movies-wrapper'>
            <Card key={movie._id} movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookmarked;
