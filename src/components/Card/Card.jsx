import React from 'react';
import "./Card.sass";
import imageSVG from "../../assets/thumbnails/112/regular/large.jpg";
import iconEmptySVG from "../../assets/icon-bookmark-empty.svg";
import iconFullSVG from "../../assets/icon-bookmark-full.svg";

const Card = (props) => {

  const bookmark = props.bookmark == "full" ? iconFullSVG : iconEmptySVG;

  return (
    <div className='Card-container'>
      <div className='Card-image-container'>
        <div className='Bookmark-container'>
          <div className='Boorkmark-wrapper'>
            <img className='Card-image-overlay' src={bookmark} alt='Card-image' />
          </div>
        </div>
        <img className='Card-image' src={imageSVG} alt='Card-image' />
      </div>
      <div className='Card-info-container'>

        <p>{props.age} 2019 </p>
        <span>.</span>
        <p> <img src="" alt="icon" />{props.type} Movie</p>
        <span>.</span>
        <p>{props.ageIndication} PG</p>

      </div>
      <div className='Card-info-title'>
        <h1>{props.title} The Great Lands</h1>
      </div>
    </div>
  );
}

export default Card;
