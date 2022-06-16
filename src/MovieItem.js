import React from 'react';

export default function MovieItem({
  color,
  title,
  director,
  year,
  deleteMovie,
}) {
  return <div
    onClick={() => deleteMovie ? deleteMovie(title) : null}
    className='movie-item' style={{ background: color }}>
    <h3>{title}</h3>
    <p>{year}</p>
    <p>by {director}</p>
  </div>;
}
