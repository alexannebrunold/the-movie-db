import React, { Fragment } from 'react';
import MostViewedMovies from './HomeComponents/MostViewedMovies';
import MostViewedTvShows from './HomeComponents/MostViewedTvShows';
import MostTrendedMovies from './HomeComponents/MostTrendedMovies';
import SearchBar from './Search/Search';
import { Link } from 'react-router-dom';
import AllKinds from './HomeComponents/AllKinds';

import '../scss/style.scss';

const Movie = () => {
  return (
    <Fragment>
      <div className='home'>
        <span className='home__header'>
          <h1 className='home__header--title'>Qu’allez vous visionner aujourd’hui?</h1>
          <SearchBar />
        </span>
        <div className='home__sliderContainer'>
          <span>
            <p className='home__sliderContainer--title'>Films du moment</p>
            <Link to="/movies/popular" className='home__sliderContainer--viewAll'>Tout voir</Link>
          </span>
          <MostTrendedMovies />
        </div>
        <div className='home__sliderContainer'>
          <span>
            <p className='home__sliderContainer--title'>Films les mieux notés</p>
            <Link to="/movies/top_rated" className='home__sliderContainer--viewAll'>Tout voir</Link>
          </span>
          <MostViewedMovies />
        </div>
        <div className='home__sliderContainer'>
          <span>
            <p className='home__sliderContainer--title'>Séries les mieux notées</p>
            <Link to="/series/top_rated" className='home__sliderContainer--viewAll'>Tout voir</Link>
          </span>
          <MostViewedTvShows />
        </div>
      </div>
      <div>
        <p className="home__sliderContainer--title">Films par genre</p>
        <div className="slider__container">
          <AllKinds />
        </div>
      </div>
    </Fragment>
  );
};

export default Movie;
