import React from 'react';
import "./Trending.sass";
import Recomended from '../Recomended/Recomended';
import TrendingCard from '../TrendingCard/TrendingCard';

const Trending = () => {
  return (
    <div className='Trending-section'>
      <h1>Trending </h1>
      <div className='Trending-cards-container'>
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
      </div>
      <h1>Recommended for you</h1>
      <br />
      <div className='Trending-recomended-container'>
        <Recomended />
        <Recomended />
        <Recomended />
        <Recomended />
        <Recomended />
        <Recomended />
      </div>
    </div>
  );
}

export default Trending;
