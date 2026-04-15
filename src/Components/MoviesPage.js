import MoviesAdd from "./MoviesAdd";
import MoviesList from "./MoviesList";

const MoviesPage = ({ movieFilter, ratingFilter, setMovies, Movies }) => {
	return (
		<div>
			<MoviesAdd Movies={Movies} setMovies={setMovies} />
			<MoviesList
				Movies={Movies}
				movieFilter={movieFilter}
				ratingFilter={ratingFilter}
			/>
		</div>
	);
};

export default MoviesPage;
