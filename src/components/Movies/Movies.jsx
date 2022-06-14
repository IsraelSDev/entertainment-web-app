import React from 'react';
import Card from '../../components/Card/Card';
import "./Movies.sass";

const Movies = (props) => {



  return (<>
    <div>
      <h1>Movies</h1>
    </div>
    <div className='movies-container'>
      {props.movies.map(movie => (
        <div className='movies-wrapper'>
          <Card key={movie.id} movie={movie} />
        </div>
      ))}
    </div>
  </>);
}

export default Movies;
