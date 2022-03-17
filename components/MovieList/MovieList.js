import styles from "../../styles/Home.module.css";
import PropTypes from 'prop-types';

const MovieList = ({movies, onSelectMovie, selectedMovie}) => {
  return (
    <ul className={styles.movies}>
      {movies.map((movie) => (
        <li
          key={movie.id}
          className={`${styles.movie} ${
            selectedMovie.id === movie.id ? styles.active : ""
          }`}
          onClick={onSelectMovie(movie)}
        >
          {movie.title}
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array,
  onSelectMovie: PropTypes.func,
  selectedMovie: PropTypes.object
};

export default MovieList;
