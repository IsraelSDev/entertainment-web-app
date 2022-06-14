import React from 'react';
import "./Card.sass";

import SVGlist from '../../assets/SVGlist';
import imageThumb from "../../assets/thumbnails/112/regular/large.jpg";


const Card = (props) => {


  const { movie } = props;

  return (
    <div className='Card-container'>
      <div className='Card-image-container'>
        <div className='Bookmark-container'>
          <div className='Boorkmark-wrapper'>{
            props.bookmark == "full" ? (
              SVGlist.iconBookmarkFull
            ) : (
              SVGlist.iconBookmarkEmpty
            )
          }
          </div>
        </div>
        <img className='Card-image' src={movie.image ? movie.image : imageThumb} alt='Card-image' />
      </div>
      <div className='Card-info-container'>

        <p>{movie.year}</p>
        <span>.</span>
        <p> {movie.release} </p>
        <span>.</span>
        <p>{movie.rating}</p>

      </div>
      <div className='Card-info-title'>
        <h1>{movie.title}</h1>
      </div>
    </div>
  );
}

export default Card;
