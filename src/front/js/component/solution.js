import React from "react";
import office01 from "../../img/office01.png";
import office02 from "../../img/office02.png";
import office03 from "../../img/office03.png";

const Solution = () => {
	return (
		<div className="solution col-md-12 my-5">
			<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-inner solution_item">
					<div className="carousel-item active">
						<img src={office01} className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block text-white solution-box">
							<h5 className="fs-1 fw-bold shadow-w">BIENVENIDO A INVESTY</h5>
							<p className="shadow-w">Creamos soluciones para tu empresa.</p>
							<button type="button" className="btn btn-dark">
								Empezar
							</button>
						</div>
					</div>
					<div className="carousel-item">
						<img src={office02} className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block text-white solution-box">
							<h5 className="fs-1 fw-bold shadow-w">CONTACTA CON NOSOTROS</h5>
							<p className="shadow-w">
								Tenemos presencia en las principales redes sociales del mercado. De fomra presencial en
								nuestras oficinas y de forma tradicional mediante mail o teléfono.
							</p>
							<button type="button" className="btn btn-dark">
								Empezar
							</button>
						</div>
					</div>
					<div className="carousel-item">
						<img src={office03} className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block text-white solution-box">
							<h5 className="fs-1 fw-bold">QUÉ PIENSAN NUESTROS CLIENTES</h5>
							<p>Conoce la opinión de clientes y colaboradores que trabajan a nuestro lado.</p>
							<button type="button" className="btn btn-dark">
								Empezar
							</button>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="visually-hidden">
						<i className="fas fa-angle-double-left" />
					</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="visually-hidden">
						<i className="fas fa-angle-double-right" />
					</span>
				</button>
			</div>
		</div>
	);
};

export default Solution;
