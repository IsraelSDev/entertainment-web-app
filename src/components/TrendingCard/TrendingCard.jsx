import React from 'react';
import "./TrendingCard.sass";

import SVGlist from '../../assets/SVGlist';
import imageThumb from "../../assets/thumbnails/112/regular/large.jpg";


const TrendingCard = (props) => {

  return (
    <div className='Trending-card-container'>
      <div className='Trending-card-image-container'>
        <div className='Trending-card-Bookmark-container'>
          <div className='Trending-card-Boorkmark-wrapper'>{
            props.bookmark == "full" ? (
              SVGlist.iconBookmarkFull
            ) : (
              SVGlist.iconBookmarkEmpty
            )
          }
          </div>
        </div>
        <img className='Trending-card-image' src={imageThumb} alt='Card-image' />
      </div>
      <div className='Trending-card-info-container'>
        {/* 
        <p>{props.age} 2019 </p>
        <span>.</span>
        <p> <img src="" alt="icon" />{props.type} Movie</p>
        <span>.</span>
        <p>{props.ageIndication} PG</p> */}

      </div>
      {/* <div className='Trending-card-info-title'>
        <h1>{props.title} The Great Lands</h1>
      </div> */}
    </div>
  );
}

export default TrendingCard;
