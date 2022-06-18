import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import "./NavBar.sass";

import SVGlist from '../../assets/SVGlist';
import imageProfile from '../../assets/image-avatar.png';
import { favoriteContext } from '../../context/favoriteContext';

import { sectionContext } from '../../context/sectionContext';


const NavBar = () => {

  const { section, setSection } = useContext(sectionContext);
  const { favoriteMovie } = useContext(favoriteContext);

  const handleClick = (e) => {
    setSection(e.target.id);
    $('svg').removeClass('active');
    $('path').removeClass('active');
    $('a').removeClass('active');
    $(e.target).addClass('active');
  }


  return (


    < div className='nav-bar-container' >
      <aside>
        <div className='nav-bar-elements'>
          <Link className='icon-movie' to='/'> {SVGlist.movieSVG} </Link>
          <ul>
            <li><a onClick={(e) => handleClick(e)}>{SVGlist.trendingNavSVG}</a></li>
            <li><a onClick={(e) => handleClick(e)}>{SVGlist.movieNavSVG}</a></li>
            <li><a onClick={(e) => handleClick(e)}>{SVGlist.tvSeriesSVG}</a></li>
            <li><span className='count-of-favorite'>{favoriteMovie.length}</span><a onClick={(e) => handleClick(e)}>{SVGlist.bookmarkSVG}</a></li>
          </ul>
        </div>
        <div className="profile">
          <div className="profile-box">
            <img src={imageProfile} alt="image-profile" />
          </div>
        </div>
      </aside >
    </div >
  );
}

export default NavBar;
