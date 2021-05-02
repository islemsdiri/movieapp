
  

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import './App.css';

import { MovieData } from './Component/MovieData';
import MoviesList from './Component/MoviesList.js';
import AddMovie from './Component/AddMovie/AddMovie';
import SearchMovie from './Component/SearchMovie/SearchMovie'

function App() {
  const [moviesList, setMoviesList] = useState(MovieData);
  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);

  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMoviesList([...moviesList, newMovie]);
  };

  return (
    <div className="App">
      <SearchMovie
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />
      <MoviesList
        moviesList={moviesList}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AddMovie addNewMovie={addNewMovie} />
      </div>
    </div>
  );
}

export default App;
