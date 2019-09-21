import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'; 
import Movie from './Movies/Movie'; 

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
{/* created a route that will take '/' and another parameter on line 19 to take `id` parameter after`/movies/` */}
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" component={Movie} />


    </div>
  );
};

export default App;
