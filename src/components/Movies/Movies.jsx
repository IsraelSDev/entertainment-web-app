import React from 'react';
import Card from '../../components/Card/Card';
import "./Movies.sass";

const Movies = () => {
  return (<>
    <div>
      <h1>Movies</h1>
    </div>
    <div className='movies-container'>
      <div className='movies-wrapper'>
        <Card />
      </div>
      <div className='movies-wrapper'>
        <Card />
      </div>
      <div className='movies-wrapper'>
        <Card />
      </div>
      <div className='movies-wrapper'>
        <Card />
      </div>
      <div className='movies-wrapper'>
        <Card />
      </div>
      <div className='movies-wrapper'>
        <Card />
      </div>
      <div className='movies-wrapper'>
        <Card />
      </div>
      <div className='movies-wrapper'>
        <Card />
      </div>
      <div className='movies-wrapper'>
        <Card />
      </div>
      <div className='movies-wrapper'>
        <Card />
      </div>
      <div className='movies-wrapper'>
        <Card />
      </div>
    </div>
  </>);
}

export default Movies;
