import React from 'react';

export default function MovieForm({
  titleForm,
  setTitleForm,
  directorForm,
  setDirectorForm,
  yearForm,
  setYearForm,
  colorForm,
  setColorForm,
  addMovie
}) {

  function handleSubmit(e) {
    e.preventDefault();

    const movie = {
      title: titleForm,
      director: directorForm,
      year: yearForm,
      color: colorForm,
    };

    addMovie(movie);

    setTitleForm('');
    setDirectorForm('');
    setYearForm('');
    setColorForm('');
  }

  return <form onSubmit={handleSubmit}>
    <label>
          Title
      <input required value={titleForm} onChange={e => setTitleForm(e.target.value)}/>
    </label>
    <label>
        Director
      <input required value={directorForm} onChange={e => setDirectorForm(e.target.value)}/>
    </label>
    <label>
        Year Released
      <input required value={yearForm} onChange={e => setYearForm(e.target.value)}/>
    </label>
    <label>
        Poster color
      <select value={colorForm} onChange={e => setColorForm(e.target.value)}>
        <option value='red'>Red</option>
        <option value='lightblue'>Light Blue</option>
        <option value='lightpink'>Light Pink</option>
        <option value='blue'>Blue</option>
        <option value='orange'>Orange</option>
      </select>
    </label>

    <button>
        Add Movie
    </button>
  </form>;
}