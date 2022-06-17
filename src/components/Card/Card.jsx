import React, { useContext, useState } from 'react';
import "./Card.sass";

import SVGlist from '../../assets/SVGlist';
import imageThumb from "../../assets/thumbnails/112/regular/large.jpg";
import { favoriteContext } from '../../context/favoriteContext'

const Card = (props) => {

  const { favoriteMovie, handlefavoriteMovie } = useContext(favoriteContext);
  const [bookmark, setBookmark] = useState(false);
  const { movie } = props;


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
    <div className='Card-container'>
      <div className='Card-image-container'>
        <div className='Bookmark-container'>
          <div className='Boorkmark-wrapper' onClick={(e) => { handleFavorite(e) }}>{
            favoriteMovie.find(item => item._id == movie._id) ? (
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
