import React from "react";
import people01 from "../../img/people01.png";
import people02 from "../../img/people02.png";
import people03 from "../../img/people03.png";
import people04 from "../../img/people04.png";

const Valoration = () => {
	return (
		<div className="col-6 my-5 text-center offset-3">
			<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<div className="card">
							<div className="card-header">
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="fas fa-star" />
							</div>
							<div className="card-body">
								<div className="d-flex justify-content-center">
									<blockquote className="blockquote mb-0 me-5">
										<p>Acojonante</p>
										<footer className="blockquote-footer">
											Jonh Smith <cite title="Source Title">The New York Times</cite>
										</footer>
									</blockquote>
									<img src={people01} style={{ width: "5rem" }} />
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="card">
							<div className="card-header">
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="fas fa-star" />
							</div>
							<div className="card-body">
								<div className="d-flex justify-content-center">
									<blockquote className="blockquote mb-0 me-5">
										<p>Acojonante</p>
										<footer className="blockquote-footer">
											Jonh Smith <cite title="Source Title">The New York Times</cite>
										</footer>
									</blockquote>
									<img src={people02} style={{ width: "5rem" }} />
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="card">
							<div className="card-header">
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="fas fa-star" />
							</div>
							<div className="card-body">
								<div className="d-flex justify-content-center">
									<blockquote className="blockquote mb-0 me-5">
										<p>Acojonante</p>
										<footer className="blockquote-footer">
											Jonh Smith <cite title="Source Title">The New York Times</cite>
										</footer>
									</blockquote>
									<img src={people03} style={{ width: "5rem" }} />
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="card">
							<div className="card-header">
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="fas fa-star" />
							</div>
							<div className="card-body">
								<div className="d-flex justify-content-center">
									<blockquote className="blockquote mb-0 me-5">
										<p>Acojonante</p>
										<footer className="blockquote-footer">
											Jonh Smith <cite title="Source Title">The New York Times</cite>
										</footer>
									</blockquote>
									<img src={people04} style={{ width: "5rem" }} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
};

export default Valoration;
