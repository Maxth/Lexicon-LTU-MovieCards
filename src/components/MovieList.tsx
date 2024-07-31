import React, {Dispatch, ReactElement, SetStateAction} from 'react';
import './MovieList.css';
import {IMovie} from '../interfaces';

type TMovieListProps = {
  setAddedMovies: Dispatch<SetStateAction<IMovie[]>>;
  addedMovies: IMovie[];
};

export function MovieList({
  setAddedMovies,
  addedMovies,
}: TMovieListProps): ReactElement {
  return <div>MovieList</div>;
}
