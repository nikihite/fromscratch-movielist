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
        />
      </div>
    </div>
  );
}

export default App;
