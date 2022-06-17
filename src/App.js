import { useEffect, useState } from 'react';
import './App.css';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import MovieItem from './MovieItem';
import useMovieForm from './useMovieForm';

function App() {
  const [currentFilter, setFilter] = useState('');
  const [movies, setMovies] = useState('');
  const [filteredMovies, setFilteredMovies] = useState('');

  const {
    titleForm, setTitleForm,
    directorForm, setDirectorForm,
    yearForm, setYearForm,
    colorForm, setColorForm,
  } = useMovieForm();

  function addMovie(newMovie) {
    const updatedMovies = [...movies, newMovie];

    setMovies(updatedMovies);
  }

  function deleteMovie(title) {
    const index = movies.findIndex(movie => movie.title === title);
    movies.splice(index, 1);
    setFilter('');
    setMovies([...movies]);
  }

  return (
    <div className="App">
      <div className='current=movie-section'>
        <MovieForm
          titleForm={titleForm}
          setTitleForm={setTitleForm}
          directorForm={directorForm}
          setDirectorForm={setDirectorForm}
          yearForm={yearForm}
          setYearForm={setYearForm}
          colorForm={colorForm}
          setColorForm={setColorForm}
          addMovie={addMovie}
        />
        {
          titleForm && <MovieItem
            title={titleForm}
            director={directorForm}
            year={yearForm}
            color={colorForm}
          />
        }
      </div>
      <p>Filter Movies</p>
      <input value={currentFilter} onChange={(e) => setFilter(e.target.value)} />
      <MovieList movies={
        filteredMovies.length
          ? filteredMovies
          : movies
      }
      deleteMovie={deleteMovie}
      />
    </div>
  );
}

export default App;
