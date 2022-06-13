import React from 'react';
import "./Card.sass";

const Card = (props) => {

  return (
    <div className='Card-container'>
      <div className='Card-image-container'>
        <img className='Card-image' src={props.image} alt='Card-image' />
        <img className='Card-image-overlay' src={props.image} alt='Card-image' />
      </div>
      <div className='Card-info-container'>
        <div className='Card-info-date'>
          <p>{props.date}</p>
        </div>
        <div className='Card-info-type'>
          <p>{props.type}</p>
        </div>
        <div className='Card-info-ageIndication'>
          <p>{props.ageIndication}</p>
        </div>
      </div>
      <div className='Card-info-title'>
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}

export default Card;
