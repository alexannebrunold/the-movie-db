import React from 'react';
import '../scss/style.scss';
import './App.scss';
import HomePage from '../components/HomePage';
import Genre from '../components/Genre/Genre';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import NotFound from '../components/NotFound/NotFound';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path='/' to='/movie'></Redirect>
        <Route exact path='/movie' component={HomePage}></Route>
        <Route exact path='/movie/film/:genre' component={(routerFilm) => Genre(routerFilm)}></Route>
        <Route path='/movie/:id' component={(routerProps) => MovieDetails(routerProps)}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
