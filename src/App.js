import { useState } from "react";
import "./App.css";
import MoviesNav from "./Components/MoviesNav";
// import MoviesList from "./Components/MoviesList";
// import MoviesAdd from "./Components/MoviesAdd";
import MoviesFilter from "./Components/MoviesFilter";
import backgroundimage from "./assets/abstract-luxury-soft-red-background-christmas-valentines-layout-designstudioroom-web-template-business-report-with-smooth-circle-gradient-color.jpg";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import MoviesPage from "./Components/MoviesPage";
import MoviesDescription from "./Components/MoviesDescription";

function App() {
	const [Movies, setMovies] = useState([
		{
			Title: "Interstellar",
			Description:
				"Interstellar is a 2014 epic[6][7][8] science fiction film[1][9] directed by Christopher Nolan, who co-wrote the screenplay with his brother Jonathan Nolan. It features an ensemble cast led by Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, and Michael Caine. Set in a dystopian future where Earth is suffering from catastrophic blight and famine",
			PosterURL:
				"https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
			rating: 5,
			id: Math.random(),
			trailer: "https://www.youtube.com/embed/zSWdZVtXT7E?si=gB0_SkULVR59--Oh",
		},
		{
			Title: "Shot Caller",
			Description:
				"Shot Caller is a 2017 American crime thriller film written and directed by Ric Roman Waugh. The film chronicles the transformation of a well-to-do family man, played by Nikolaj Coster-Waldau, into a hardened prison gangster, which he undergoes to survive California's penal system after he is incarcerated for his role in a deadly DUI car accident",
			PosterURL:
				"https://upload.wikimedia.org/wikipedia/en/2/25/Shot_Caller_poster.jpg",
			rating: 4,
			id: Math.random(),
			trailer: "https://www.youtube.com/embed/QQxjyRr9k2E?si=4FsC1IU31K8_7TIM",
		},

		{
			Title: "Avengement",
			Description:
				"Avengement is a 2019 British action thriller film directed by Jesse V. Johnson who co-wrote the film with Stu Small. The film stars Scott Adkins, Craig Fairbrass and Thomas Turgoose.",
			PosterURL:
				"https://upload.wikimedia.org/wikipedia/en/9/9c/Avengement.jpg",
			rating: 3,
			id: Math.random(),
			trailer: "https://www.youtube.com/embed/pUQzHB8hs_s?si=9kQWZ0fiLMn3TiVW",
		},
	]);
	const [movieFilter, setMovieFilter] = useState("");
	const [ratingFilter, setRatingFilter] = useState(0);
	return (
		<div
			style={{
				backgroundImage: `url(${backgroundimage})`,
				backgroundSize: "cover",
				height: "150vh",
			}}
		>
			<MoviesNav
				movieFilter={movieFilter}
				setMovieFilter={setMovieFilter}
				ratingFilter={ratingFilter}
				setRatingFilter={setRatingFilter}
			/>
			<Routes>
				<Route
					path='/Movies'
					element={
						<MoviesPage
							movieFilter={movieFilter}
							ratingFilter={ratingFilter}
							Movies={Movies}
							setMovies={setMovies}
						/>
					}
				/>
				<Route
					path='/'
					element={
						<HomePage
							Movies={Movies}
							setMovies={setMovies}
							movieFilter={movieFilter}
							setMovieFilter={setMovieFilter}
							ratingFilter={ratingFilter}
							setRatingFilter={setRatingFilter}
						/>
					}
				/>
				<Route
					path='/MoviesDescription/:id'
					element={<MoviesDescription Movies={Movies} />}
				/>
			</Routes>

			{/* <MoviesFilter
				setMovieFilter={setMovieFilter}
				movieFilter={movieFilter}
				ratingFilter={ratingFilter}
				setRatingFilter={setRatingFilter}
			/> */}
		</div>
	);
}

export default App;
