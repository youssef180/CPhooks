import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import MoviesNav from "./MoviesNav";
import MoviesCard from "./MoviesCard";
import MoviesAdd from "./MoviesAdd";

const HomePage = ({
	Movies,
	setMovies,
	movieFilter,
	setMovieFilter,
	ratingFilter,
	setRatingFilter,
}) => {
	// Smooth transition from carousel to the movie grid
	const carouselItemStyle = {
		height: "60vh",
		backgroundSize: "cover",
		backgroundPosition: "center",
		position: "relative",
	};

	const overlayStyle = {
		position: "absolute",
		bottom: 0,
		left: 0,
		width: "100%",
		height: "100%",
		background:
			"linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 100%)",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
		padding: "50px",
		textAlign: "left",
	};

	return (
		<div
			style={{ backgroundColor: "#000", minHeight: "100vh", color: "white" }}
		>
			{/* <MoviesNav
				movieFilter={movieFilter}
				setMovieFilter={setMovieFilter}
				ratingFilter={ratingFilter}
				setRatingFilter={setRatingFilter}
			/> */}

			{/* Cinematic Carousel */}
			<Carousel fade indicators={false} nextLabel='' prevLabel=''>
				<Carousel.Item
					style={{
						...carouselItemStyle,
						backgroundImage: `url("https://images.alphacoders.com/112/thumb-1920-1123538.jpg")`,
					}}
				>
					<div style={overlayStyle}>
						<h1
							style={{
								color: "#ff0000",
								fontWeight: "900",
								letterSpacing: "3px",
							}}
						>
							ACTION PACKED
						</h1>
						<p style={{ maxWidth: "500px" }}>
							Experience the heart-pounding thrill of our latest blockbusters.
						</p>
					</div>
				</Carousel.Item>

				<Carousel.Item
					style={{
						...carouselItemStyle,
						backgroundImage: "url('https://unsplash.com')",
					}}
				>
					<div style={overlayStyle}>
						<h1
							style={{
								color: "#ff0000",
								fontWeight: "900",
								letterSpacing: "3px",
							}}
						>
							NEW RELEASES
						</h1>
						<p style={{ maxWidth: "500px" }}>
							Fresh stories from top directors around the globe.
						</p>
					</div>
				</Carousel.Item>
			</Carousel>

			{/* Movie List Section */}
			<Container style={{ marginTop: "50px", paddingBottom: "50px" }}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: "30px",
					}}
				>
					<h2
						style={{
							borderLeft: "4px solid #ff0000",
							paddingLeft: "15px",
							letterSpacing: "2px",
						}}
					>
						BROWSE <span style={{ fontWeight: "300" }}>LIBRARY</span>
					</h2>
					<MoviesAdd Movies={Movies} setMovies={setMovies} />
				</div>

				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						gap: "25px",
						justifyContent: "center",
					}}
				>
					{Movies.filter(
						(el) =>
							el.Title.toLowerCase().includes(movieFilter.toLowerCase()) &&
							el.rating >= ratingFilter,
					).map((el) => (
						<MoviesCard key={el.id} el={el} />
					))}
				</div>
			</Container>
		</div>
	);
};

export default HomePage;
