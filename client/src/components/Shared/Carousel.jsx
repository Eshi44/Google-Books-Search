import React from "react";
import BooksImage from "../../images/books-image.jpg";

function Carousel() {
	const carouselImages = {
		height: 400,
	};

	return (
		<div className="container">
			<div
				id="carouselExampleIndicators"
				className="carousel slide"
				data-ride="carousel"
				style={{ width: "500" }}
			>
				<ol className="carousel-indicators">
					<li
						data-target="#carouselExampleIndicators"
						data-slide-to="0"
						className="active"
					></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src={BooksImage}
							className="d-block w-100"
							style={carouselImages}
							alt="Books"
						/>
					</div>
					<div className="carousel-item">
						<img src={BooksImage} className="d-block w-100" alt="..." />
					</div>
					<div className="carousel-item">
						<img src="..." className="d-block w-100" alt="..." />
					</div>
				</div>
				<a
					className="carousel-control-prev"
					href="#carouselExampleIndicators"
					role="button"
					data-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselExampleIndicators"
					role="button"
					data-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	);
}

export default Carousel;
