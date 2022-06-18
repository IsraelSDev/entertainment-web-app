import React, { useState, useContext } from 'react';
import "./TrendingCard.sass";
import $ from 'jquery';

import SVGlist from '../../assets/SVGlist';
import loadingImg from '../../assets/loading-buffering.gif';
import { favoriteContext } from '../../context/favoriteContext';


const TrendingCard = (props) => {

  const { favoriteMovie, handlefavoriteMovie } = useContext(favoriteContext);

  const { movie } = props;
  const [bookmark, setBookmark] = useState(false);

  const handleFavorite = (e) => {

    let listOfFavorite = [...favoriteMovie];

    if (!bookmark) {
      setBookmark(!bookmark);
      const hasOnList = listOfFavorite.find(item => item._id == movie._id)
        ? null : listOfFavorite.push(movie);
    } else {
      setBookmark(!bookmark);
      listOfFavorite = listOfFavorite.filter(item => item._id !== movie._id);
    }
    handlefavoriteMovie(listOfFavorite);
  }

  return (
    <div className='Trending-card-container'>
      <div className='Trending-card-image-container'>
        <div className='Trending-card-Bookmark-container' onClick={(e) => { handleFavorite(e.target) }}>
          <div className='Trending-card-Boorkmark-wrapper' >{
            favoriteMovie.find(item => item._id == movie._id) ? (
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
