import React from 'react';
import Card from '../../components/Card/Card';

const Series = (props) => {



  return (<>
    <div>
      <h1>Series</h1>
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

export default Series;
