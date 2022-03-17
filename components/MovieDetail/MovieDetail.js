import styles from "../../styles/Home.module.css";
import PropTypes from 'prop-types';

const MovieDetail = ({ selectedMovie, imageUrl, movieGenres }) => {
  return (
    <div className={styles.movieDetail}>
      <div className={styles.movieImage}>
        <img src={imageUrl} alt={selectedMovie.title} />
      </div>
      <div className={styles.movieConent}>
        <h2>{selectedMovie.title} ({selectedMovie.release_date.split('-')[0]})</h2>
        <p className={styles.movieDesc}>{selectedMovie.overview}</p>
        <div>

          <p><strong>Language: </strong>{selectedMovie.original_language}</p>
          <p><strong>Rating: </strong>{selectedMovie.vote_average}/10</p>
          <p><strong>Genre: </strong>{movieGenres}</p>
        </div>
      </div>
    </div>
  )
}

MovieDetail.propTypes = {
  movieGenres: PropTypes.string,
  imageUrl: PropTypes.string,
  selectedMovie: PropTypes.object
};

export default MovieDetail;
