import React, { useContext } from 'react';
import "./Trending.sass";
import Recomended from '../Recomended/Recomended';
import TrendingCard from '../TrendingCard/TrendingCard';
import { moviesContext } from '../../context/moviesContext';

const Trending = () => {

  const { movies } = useContext(moviesContext);

  return (
    <div className='Trending-section'>
      <div className='Trending-container'>
        <h1>Trending </h1>
        <div className='Trending-cards-container'>
          {
            movies.map(movie => (
              movie.year > 2013 ? <TrendingCard key={movie.id} movie={movie} /> : null
            ))
          }
        </div>
        <br />
        <h1>Recommended for you</h1>
        <div className='Trending-recomended-container'>
          {
            movies.map(movie => (
              <Recomended key={movie.id} movie={movie} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Trending;
