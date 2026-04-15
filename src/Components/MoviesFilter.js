import Rating from "@mui/material/Rating";
const MoviesFilter = ({
	movieFilter,
	setMovieFilter,
	ratingFilter,
	setRatingFilter,
}) => {
	const resetFilter = () => {
		setMovieFilter("");
		setRatingFilter(0);
	};

	return (
		<div>
			<input
				value={movieFilter}
				type='text'
				onChange={(e) => setMovieFilter(e.target.value)}
			></input>
			<Rating
				value={ratingFilter}
				onChange={(e) => setRatingFilter(e.target.value)}
			/>
			<button variant='secondary' onClick={resetFilter}>
				Reset
			</button>
		</div>
	);
};

export default MoviesFilter;
