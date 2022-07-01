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
      <select value={colorForm} onChange={e => setColorForm(e.target.value)}>
        <option value='blank'>Pick Your Background Color</option>
        <option value='lightcoral'>Coral</option>
        <option value='lightblue'>Blue</option>
        <option value='lightpink'>Pink</option>
        <option value='lightgreen'>Green</option>
        <option value='lightseagreen'>Teal</option>
      </select>
    </label>

    <button>
        Add Movie
    </button>
  </form>;
}