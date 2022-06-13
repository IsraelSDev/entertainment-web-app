import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import "./NavBar.sass";

import movieSVG from '../../assets/movie.svg';
import bookmarkSVG from '../../assets/icon-nav-bookmark.svg';
import homeSVG from '../../assets/icon-nav-home.svg';
import tvSeriesSVG from '../../assets/icon-nav-tv-series.svg';
import movieNavSVG from '../../assets/icon-nav-movies.svg';
import imageProfile from '../../assets/image-avatar.png';

import { sectionContext } from '../../context/sectionContext';




const NavBar = () => {

  const { section, setSection } = useContext(sectionContext);

  const handleClick = (e) => {
    setSection(e.target.alt);
  }

  return (
    <div className='nav-bar-container'>
      <aside>
        <div>
          <Link to='/'> <img src={movieSVG} alt="" /> </Link>
          <ul>
            <li><a onClick={(e) => handleClick(e)}><img src={homeSVG} alt="Trending" /></a></li>
            <li><a onClick={(e) => handleClick(e)}><img src={movieNavSVG} alt="Movies" /></a></li>
            <li><a onClick={(e) => handleClick(e)}><img src={tvSeriesSVG} alt="Series" /></a></li>
            <li><a onClick={(e) => handleClick(e)}><img src={bookmarkSVG} alt="Bookmarked" /></a></li>
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
