import React, { useState } from "react"; // Don't forget this import!
import Rating from "@mui/material/Rating";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import MoviesDescription from "./MoviesDescription";

const MoviesCard = ({ el }) => {
	const [isHovered, setIsHovered] = useState(false);

	const cardStyle = {
		width: "18rem",
		backgroundColor: isHovered ? "rgba(30, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.6)",
		backdropFilter: "blur(10px)",
		padding: "10px", // Reduced padding slightly to fit movie poster better
		borderRadius: "12px",
		color: "white",
		cursor: "pointer",
		transition: "all 0.3s ease-in-out",
		// Hover specific logic
		border: isHovered ? "1px solid #ff0000" : "1px solid rgba(255, 0, 0, 0.2)",
		transform: isHovered ? "translateY(-10px)" : "translateY(0)",
		boxShadow: isHovered ? "0 0 25px 5px rgba(255, 0, 0, 0.5)" : "none",
	};

	return (
		<Card
			style={cardStyle}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Link to={`/MoviesDescription/${el.id}`}>
				<Card.Img
					variant='top'
					src={el.PosterURL}
					style={{ borderRadius: "8px" }} // Smooths the image corners
				/>
			</Link>
			<Card.Body>
				{/* Title turns red on hover for extra "pop" */}
				<Card.Title
					style={{ color: isHovered ? "#ff0000" : "white", transition: "0.3s" }}
				>
					{el.Title}
				</Card.Title>
				<Card.Text style={{ fontSize: "0.9rem", opacity: 0.8 }}>
					{el.Description}
				</Card.Text>
				<Rating
					value={el.rating}
					readOnly
					sx={{ "& .MuiRating-icon": { color: "#ff0000" } }} // Makes the stars red
				/>
			</Card.Body>
		</Card>
	);
};

export default MoviesCard;
