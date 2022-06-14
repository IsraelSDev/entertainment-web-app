import React from 'react';
import "./Recomended.sass";
import Card from '../Card/Card';

const Recomended = (props) => {

  return (
    <div className='recomended-container'>
      <Card bookmark="" movie={props.movie} />
    </div>
  );
}

export default Recomended;
