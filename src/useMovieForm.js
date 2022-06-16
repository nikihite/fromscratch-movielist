import { useState } from 'react';
import React from 'react';

export default function useMovieForm() {
  const [titleForm, setTitleForm] = useState('');
  const [directorForm, setDirectorForm] = useState('');
  const [yearForm, setYearForm] = useState('');
  const [colorForm, setColorForm] = useState('');

  return {
    titleForm, setTitleForm,
    directorForm, setDirectorForm,
    yearForm, setYearForm,
    colorForm, setColorForm,
  };
}
