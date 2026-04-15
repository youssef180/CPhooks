import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";

const MoviesDescription = ({ Movies }) => {
	const { id } = useParams();

	const found = Movies.find((el, i, t) => el.id == id);
	console.log(found);

	if (!found)
		return (
			<div
				style={{
					backgroundColor: "#000",
					color: "#ff0000",
					height: "100vh",
					padding: "20px",
				}}
			>
				Movie Not Found
			</div>
		);

	return (
		<div
			style={{
				backgroundColor: "#000",
				color: "white",
				minHeight: "100vh",
				padding: "40px",
				fontFamily: "sans-serif",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			{/* Main Content Wrapper */}
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "center",
					gap: "30px",
					maxWidth: "1200px",
					alignItems: "flex-start",
				}}
			>
				{/* 1. Image Column */}
				<img
					src={found.PosterURL}
					alt='Not Found'
					style={{
						width: "300px",
						borderRadius: "10px",
						border: "2px solid #ff0000",
						boxShadow: "0px 0px 15px #ff0000",
					}}
				/>

				{/* 2. Info & Trailer Column */}
				<div style={{ flex: "1", minWidth: "300px", maxWidth: "600px" }}>
					<h1
						style={{
							color: "#ff0000",
							margin: "0 0 10px 0",
							textTransform: "uppercase",
						}}
					>
						{found.Title}
					</h1>

					<Rating
						value={found.rating}
						readOnly
						sx={{
							marginBottom: "15px",
							"& .MuiRating-iconFilled": { color: "#ff0000" },
							"& .MuiRating-iconEmpty": { color: "#333" },
						}}
					/>

					<p
						style={{
							color: "#ccc",
							lineHeight: "1.5",
							fontSize: "1rem",
							marginBottom: "20px",
						}}
					>
						{found.Description}
					</p>

					{/* Trailer placed right next to/under the description */}
					<div
						style={{
							border: "2px solid #ff0000",
							lineHeight: "0",
							display: "inline-block",
						}}
					>
						<iframe
							width='100%'
							height='250'
							style={{ maxWidth: "500px", aspectRatio: "16/9" }}
							src={found.trailer}
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MoviesDescription;
