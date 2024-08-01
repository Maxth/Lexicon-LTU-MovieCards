import {ReactElement} from 'react';
import './MovieCard.css';
import {IMovie} from '../interfaces';

interface IMovieCardProps {
  movie: IMovie;
  onClick: (id: IMovie['id']) => void;
}

export function MovieCard({movie, onClick}: IMovieCardProps): ReactElement {
  return (
    <article className='movie-card' onClick={() => onClick(movie.id)}>
      <div className='info-container'>
        <div>
          <h4>{movie.title}</h4>
          <h6>{movie.genre}</h6>
        </div>
        <p>Rating: {movie.rating}</p>
      </div>
      <p className='description'>{movie.description}</p>
    </article>
  );
}
