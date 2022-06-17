import React from 'react';
import MovieItem from './MovieItem';

export default function MovieList({ movies, deleteMovie }) {
  console.log(movies);
  return (
    <div className='movie-list'>
      {
        movies.map((movie, i) => <MovieItem
          deleteMovie={deleteMovie}
          key={`${movie.title}=${i}`} {...movie} />)
      }
    </div>);
}