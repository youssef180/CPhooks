import MoviesCard from "./MoviesCard";

const MoviesList = ({ Movies, movieFilter, ratingFilter }) => {
	var F = Movies.filter(
		(el, i, t) =>
			el.Title.toUpperCase().includes(movieFilter.toUpperCase()) &&
			el.rating >= ratingFilter,
	);
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-around",
				flexWrap: "wrap",
			}}
		>
			{F.length == 0 ? (
				<h3> NOT FOUND</h3>
			) : (
				F.map((el, i, t) => <MoviesCard key={i} el={el} />)
			)}
		</div>
	);
};

export default MoviesList;
