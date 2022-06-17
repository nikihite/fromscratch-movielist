import { useEffect, useState } from 'react';
import './App.css';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import MovieItem from './MovieItem';
import useMovieForm from './useMovieForm';

function App() {
  const [currentFilter, setFilter] = useState('');
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const {
    titleForm, setTitleForm,
    directorForm, setDirectorForm,
    yearForm, setYearForm,
    colorForm, setColorForm,
  } = useMovieForm();

  useEffect(() => {
    const filteredMovies = movies.
      filter(movie => movie.title.includes(currentFilter));
    setFilteredMovies(filteredMovies);
  }, [currentFilter, movies]);

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
      <img className="niki-pic" src='../nikisflick.png'/>
      <p>Filter Movies</p>
      <input value={currentFilter} onChange={(e) => setFilter(e.target.value)} />
      <div className='current-movie-section'>
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
      Click On Movie To Delete
      <MovieList movies={
        filteredMovies.length > 0
          ? filteredMovies
          : movies
      }
      deleteMovie={deleteMovie}
      />
    </div>
  );
}

export default App;