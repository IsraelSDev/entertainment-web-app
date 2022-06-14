import React from 'react';
import "./TrendingCard.sass";

import SVGlist from '../../assets/SVGlist';
import loadingImg from '../../assets/loading-buffering.gif';


const TrendingCard = (props) => {

  const { movie } = props;

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
        <div className='Trending-card-image-wrapper'>
          <div className='trending-image-box'>
            <img className='Trending-card-image' src={movie.image ? movie.image : null} alt='Card-image' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingCard;
