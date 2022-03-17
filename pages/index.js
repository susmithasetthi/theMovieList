import Head from "next/head";
import styles from "../styles/Home.module.css";
import {useState, useMemo, useCallback} from "react";
import { MovieList, MovieDetail } from '../components'

export default function Home({movies}) {
  const {
    movies: {results: moviesList} = {},
    genres: {genres},
    config,
  } = movies;
  const [selectedMovie, setSelectedMovie] = useState(moviesList[0]);

  const imageUrl = useMemo(() => {
    return `${config?.images?.secure_base_url}w500${selectedMovie?.poster_path}`;
  }, [config?.images?.secure_base_url, selectedMovie]);

  const movieGenres = useMemo(() => {
    return genres
      .filter((g) => selectedMovie.genre_ids.includes(g.id))
      .reduce((prev, current) => [...prev, current.name], [])
      .join(", ");
  }, [selectedMovie, genres]);

  const handleMovieChange = useCallback((movie) => () => {
    setSelectedMovie(movie);
  }, []);

  return (
    <div>
      <Head>
        <title>{selectedMovie.title}</title>
      </Head>
      <header className={styles.header}><h1>Movie Catalogue</h1></header>
      <main>
        <section className={styles.movieSection}>
          <MovieDetail selectedMovie={selectedMovie} imageUrl={imageUrl} movieGenres={movieGenres} />
          <MovieList movies={moviesList} onSelectMovie={handleMovieChange} selectedMovie={selectedMovie} />
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const origin = context.req.headers.host;
  const res = await fetch(`http://${origin}/api/getMovies`);
  const movies = await res.json();
  return {
    props: {movies},
  };
}
