import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

const MoviesNav = ({
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
		<Navbar
			expand='lg'
			style={{
				backgroundColor: "rgba(0, 0, 0, 0.95)",
				borderBottom: "2px solid #ff0000",
				padding: "15px 0",
				backdropFilter: "blur(10px)",
			}}
			variant='dark'
			sticky='top' // Keeps it at the top while scrolling
		>
			<Container fluid>
				<Navbar.Brand
					as={Link} // Use "as={Link}" to prevent page refresh on logo click
					to='/'
					style={{
						color: "#ff0000",
						fontWeight: "bold",
						fontSize: "1.5rem",
						letterSpacing: "2px",
						textDecoration: "none",
					}}
				>
					TOP FILMS
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<Nav
						className='me-auto my-2 my-lg-0'
						style={{
							alignItems: "center",
							display: "flex",
							flexDirection: "row", // Ensures they stay horizontal
							gap: "20px", // Adds space between HOME and MOVIES
						}}
					>
						<Link
							to='/'
							style={{
								color: "white",
								textDecoration: "none",
								fontWeight: "500",
								transition: "0.3s",
							}}
							onMouseEnter={(e) => (e.target.style.color = "#ff0000")}
							onMouseLeave={(e) => (e.target.style.color = "white")}
						>
							HOME
						</Link>

						<Link
							to='/movies' // Adjust this path to your movies route
							style={{
								color: "white",
								textDecoration: "none",
								fontWeight: "500",
								transition: "0.3s",
							}}
							onMouseEnter={(e) => (e.target.style.color = "#ff0000")}
							onMouseLeave={(e) => (e.target.style.color = "white")}
						>
							MOVIES
						</Link>
					</Nav>

					<div
						style={{
							marginRight: "20px",
							display: "flex",
							alignItems: "center",
						}}
					>
						<span
							style={{
								color: "white",
								marginRight: "10px",
								fontSize: "0.8rem",
								fontWeight: "bold",
							}}
						>
							FILTER:
						</span>
						<Rating
							value={ratingFilter}
							onChange={(e) => setRatingFilter(Number(e.target.value))}
							sx={{
								"& .MuiRating-icon": { color: "#ff0000" },
								"& .MuiRating-iconEmpty": { color: "#444" },
							}}
						/>
					</div>

					<Form className='d-flex' style={{ gap: "10px" }}>
						<Form.Control
							value={movieFilter}
							type='search'
							placeholder='Search movies...'
							onChange={(e) => setMovieFilter(e.target.value)}
							style={{
								backgroundColor: "#1a1a1a",
								border: "1px solid #444",
								color: "white",
								borderRadius: "20px",
							}}
						/>
						<Button
							onClick={resetFilter}
							style={{
								backgroundColor: "transparent",
								border: "1px solid #ff0000",
								color: "#ff0000",
								borderRadius: "20px",
								transition: "0.3s",
								fontWeight: "bold",
								padding: "5px 20px",
							}}
							onMouseEnter={(e) => {
								e.target.style.backgroundColor = "#ff0000";
								e.target.style.color = "white";
								e.target.style.boxShadow = "0 0 10px #ff0000";
							}}
							onMouseLeave={(e) => {
								e.target.style.backgroundColor = "transparent";
								e.target.style.color = "#ff0000";
								e.target.style.boxShadow = "none";
							}}
						>
							RESET
						</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default MoviesNav;
