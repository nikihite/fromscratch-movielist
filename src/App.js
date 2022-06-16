import { useEffect, useState } from 'react';
import './App.css';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import MovieItem from './MovieItem';
import { useMovieForm } from './useMovieForm';

function App() {
  const [currentFilter, setFilter] = useState('');
  const [movies, setMovies] = useState('');
  const [filteredMovies, setFilteredMovies] = useState('');

  return (
    <div className="App">

    </div>
  );
}

export default App;
