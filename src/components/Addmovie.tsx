import React, {Dispatch, ReactElement, SetStateAction} from 'react';
import './Addmovie.css';
import {IMovie} from '../interfaces';
import {ratings} from '../constants';

type TAddMovieProps = {
  setAddedMovies: Dispatch<SetStateAction<IMovie[]>>;
};

export function Addmovie({setAddedMovies}: TAddMovieProps): ReactElement {
  return (
    <section className='add-movie'>
      <h2 className='header'>Let's add a movie!</h2>
      <form className='form'>
        <div>
          <label htmlFor='title'>Title</label>
          <input id='title' required minLength={1} />
        </div>
        <div>
          <label htmlFor='rating'>Rating</label>
          <input
            type='range'
            id='rating'
            min={1}
            max={5}
            step={1}
            list='markers'
          />
          <datalist id='markers'>
            {ratings.map(r => (
              <option key={r} label={r.toString()} value={r}></option>
            ))}
          </datalist>
        </div>

        <div>
          <label htmlFor='genre'>Genre</label>
          <select id='genre'></select>
        </div>
      </form>
    </section>
  );
}
