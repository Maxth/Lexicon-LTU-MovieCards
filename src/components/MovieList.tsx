import {Dispatch, ReactElement, SetStateAction} from 'react';
import './MovieList.css';
import {IMovie} from '../interfaces';
import {MovieCard} from './MovieCard';

type TMovieListProps = {
  setAddedMovies: Dispatch<SetStateAction<IMovie[]>>;
  addedMovies: IMovie[];
};

export function MovieList({
  setAddedMovies,
  addedMovies,
}: TMovieListProps): ReactElement {
  const onCardClick = (id: string) =>
    setAddedMovies(prev => prev.filter(m => m.id !== id));

  return (
    <section className='movie-list'>
      {addedMovies.map((movie, idx) => (
        <MovieCard
          key={`${movie.title}-${idx}`}
          movie={movie}
          onClick={onCardClick}
        />
      ))}
    </section>
  );
}
