import React from "react";
import people01 from "../../img/people01.png";
import people02 from "../../img/people02.png";
import people03 from "../../img/people03.png";
import people04 from "../../img/people04.png";

const Valoration = () => {
	return (
		<div className="row py-4 mb-4">
			<h2 className="ms-4 fs-1">VALORACIONES</h2>
			<hr />
			<div className="col-md-6 offset-md-3 my-5 text-center">
				<div id="carouselExampleControls" className="carousel slide shadow-lg" data-bs-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div className="card">
								<div className="card-header">
									<i className="fas fa-star text-warning fs-2" />
									<i className="fas fa-star text-warning fs-2" />
									<i className="fas fa-star text-warning fs-2" />
									<i className="fas fa-star text-warning fs-2" />
									<i className="fas fa-star text-warning fs-2" />
								</div>
								<div className="card-body">
									<div className="d-flex justify-content-center">
										<blockquote className="blockquote mb-0 me-5">
											<p>Funcionalidad excelente</p>
											<footer className="blockquote-footer">
												John Smith{" "}
												<cite title="Source Title">&#40;The New York Times&#41;</cite>
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
									<i className="fas fa-star text-warning fs-2" />
									<i className="fas fa-star text-warning fs-2" />
									<i className="fas fa-star text-warning fs-2" />
									<i className="fas fa-star text-warning fs-2" />
									<i className="fas fa-star-half-alt text-warning fs-2" />
								</div>
								<div className="card-body">
									<div className="d-flex justify-content-center">
										<blockquote className="blockquote mb-0 me-5">
											<p>Muy recomendable para autónomos</p>
											<footer className="blockquote-footer">
												William Morrison <cite title="Source Title">&#40;Forbes&#41;</cite>
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
									<i className="fas fa-star text-warning fs-2" />
									<i className="fas fa-star text-warning fs-2" />
									<i className="fas fa-star text-warning fs-2" />
									<i className="fas fa-star text-warning fs-2" />
									<i className="fas fa-star text-warning fs-2" />
								</div>
								<div className="card-body">
									<div className="d-flex justify-content-center">
										<blockquote className="blockquote mb-0 me-5">
											<p>Web de gran utilidad</p>
											<footer className="blockquote-footer">
												Elizabeth Maxwell{" "}
												<cite title="Source Title">&#40;Financial Times&#41;</cite>
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
									<i className="fas fa-star text-warning fs-2" />
									<i className="fas fa-star text-warning fs-2" />
									<i className="fas fa-star text-warning fs-2" />
									<i className="fas fa-star text-warning fs-2" />
									<i className="fas fa-star text-warning fs-2" />
								</div>
								<div className="card-body">
									<div className="d-flex justify-content-center">
										<blockquote className="blockquote mb-0 me-5">
											<p>En el top 10 de webs de facturación</p>
											<footer className="blockquote-footer">
												Jeremy Brown{" "}
												<cite title="Source Title">&#40;The Washington Post&#41;</cite>
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
		</div>
	);
};

export default Valoration;
