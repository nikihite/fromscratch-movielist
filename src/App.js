import { useEffect, useState } from 'react';
import './App.css';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import MovieItem from './MovieItem';
import useMovieForm from './useMovieForm';

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filterString, setFilterString] = useState('');

  const {
    titleForm, setTitleForm,
    directorForm, setDirectorForm,
    yearForm, setYearForm,
    colorForm, setColorForm,
  } = useMovieForm();

  useEffect(() => {
    setFilteredMovies(movies);
    setFilterString('');
  }, [movies]);

  function filterMovies(filterString) {
    setFilterString(filterString);
    const filteredMovies = movies
      .filter(movie => movie.title.includes(filterString));
    setFilteredMovies(filteredMovies);
  }

  function addMovie(newMovie) {
    const updatedMovies = [...movies, newMovie];

    setMovies(updatedMovies);
  }

  function deleteMovie(title) {
    const index = movies.findIndex(movie => movie.title === title);
    movies.splice(index, 1);
    setFilteredMovies([...movies]);
  }

  return (
    <div className="App">
      <img className="niki-pic" src='../nikisflick.png'/>

      <div>
        <MovieItem
          title={titleForm}
          director={directorForm}
          year={yearForm}
          color={colorForm}
        />
      </div>

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
      </div>

      <div className='filter'>
        <p>Filter Movies</p>
        <input value={filterString} onChange={(e) => filterMovies(e.target.value)} />
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