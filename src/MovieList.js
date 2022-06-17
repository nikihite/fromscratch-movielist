import React from 'react';
import MovieItem from './MovieItem';

export default function MovieList({ movies, deleteMovie }) {
  return <div className='movie-list'>
    {
      movies.map((movie, i) => <MovieItem
        deleteMovie={deleteMovie}
        key={`${movie.title}=${i}`} {...movie} />)
    }
  </div>;
}