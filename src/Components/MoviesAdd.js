import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Rating from "@mui/material/Rating";

const MoviesAdd = ({ Movies, setMovies }) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [Title, setTitle] = useState("");
	const [Description, setDescription] = useState("");
	const [PosterURL, setPosterURL] = useState("");
	const [rating, setRating] = useState(0);

	const AddNewMovie = () =>
		setMovies([
			...Movies,
			{
				Title,
				Description,
				PosterURL,
				rating: Number(rating),
				id: Math.random(),
			},
		]);

	// Custom style for inputs to match the dark theme
	const inputStyle = {
		backgroundColor: "#1a1a1a",
		border: "1px solid #444",
		color: "white",
	};

	return (
		<div style={{ display: "flex", justifyContent: "right", margin: "20px" }}>
			<Button
				style={{
					backgroundColor: "#ff0000",
					border: "none",
					fontWeight: "bold",
					boxShadow: "0 0 15px rgba(255, 0, 0, 0.4)",
				}}
				onClick={handleShow}
			>
				+ ADD NEW MOVIE
			</Button>

			<Modal
				show={show}
				onHide={handleClose}
				centered
				contentClassName='dark-modal'
			>
				<style>
					{`
						.dark-modal {
							background-color: rgba(20, 20, 20, 0.95) !important;
							border: 1px solid #ff0000 !important;
							backdrop-filter: blur(10px);
							color: white;
						}
						.modal-header { border-bottom: 1px solid #333 !important; }
						.modal-footer { border-top: 1px solid #333 !important; }
						.btn-close { filter: invert(1) grayscale(100%) brightness(200%); }
					`}
				</style>

				<Modal.Header closeButton>
					<Modal.Title style={{ color: "#ff0000", fontWeight: "bold" }}>
						Add A Movie
					</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form>
						<Form.Group className='mb-3'>
							<Form.Label>Movie Title</Form.Label>
							<Form.Control
								style={inputStyle}
								onChange={(e) => setTitle(e.target.value)}
								type='text'
								placeholder='e.g. Inception'
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label>Description</Form.Label>
							<Form.Control
								style={inputStyle}
								as='textarea'
								rows={2}
								onChange={(e) => setDescription(e.target.value)}
								placeholder='Brief summary...'
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label>Poster URL</Form.Label>
							<Form.Control
								style={inputStyle}
								onChange={(e) => setPosterURL(e.target.value)}
								type='text'
								placeholder='https://image-link.com'
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label style={{ display: "block" }}>Rating</Form.Label>
							<Rating
								value={Number(rating)}
								onChange={(e) => setRating(e.target.value)}
								sx={{ "& .MuiRating-icon": { color: "#ff0000" } }}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>

				<Modal.Footer>
					<Button variant='outline-light' onClick={handleClose}>
						Discard
					</Button>
					<Button
						style={{ backgroundColor: "#ff0000", border: "none" }}
						onClick={() => {
							AddNewMovie();
							handleClose();
						}}
					>
						Add Movie
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default MoviesAdd;
