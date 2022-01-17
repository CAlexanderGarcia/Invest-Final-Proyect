import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
	return (
		<div className="container" id="suscripciones-link">
			<div className="pricing-header">
				<h2 className="featurette-heading bluedark-investy">Suscripciones</h2>
				<hr className="bluedark-investy mb-5" />
				<p className="fs-5 text-muted">
					Como un sitio de membresías, siempre nos enfocamos en reducir la cancelación y aumentar la
					satisfacción. Sabemos que recopilar el feedback de los clientes a lo largo del ciclo de vida del
					mismo nos ha permitido lograr ambos objetivos
				</p>
			</div>

			<div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
				<div className="col">
					<div className="card mb-4 rounded-3 shadow-sm">
						<div className="card-header py-3 bg-bluedark-investy text-white">
							<h4 className="my-0">Free</h4>
						</div>
						<div className="card-body">
							<h3 className="card-title pricing-card-title fs-1">
								0€
								<small className="text-muted fw-light">/mes</small>
							</h3>
							<ul className="list-unstyled mt-3 mb-4">
								<li>Hasta 5 clientes, proveedores o productos</li>
								<li>Hasta 10 facturas</li>
								<li>Soporte Email</li>
								<li>Ayuda a través de Help Center</li>
							</ul>
							<button type="button" className="w-100 btn btn-lg border-bluedark-investy">
								<Link to="/register-form">Regístrate Gratis</Link>
							</button>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card mb-4 rounded-3 shadow-sm">
						<div className="card-header py-3 bg-bluedark-investy text-white">
							<h4 className="my-0 fw-normal">Pro</h4>
						</div>
						<div className="card-body">
							<h3 className="card-title pricing-card-title fs-1">
								15€
								<small className="text-muted fw-light">/mes</small>
							</h3>
							<ul className="list-unstyled mt-3 mb-4">
								<li>Hasta 50 clientes, proveedores o productos</li>
								<li>Hasta 100 facturas</li>
								<li>Prioridad de soporte email</li>
								<li>Acceso prioritario a Help Center</li>
							</ul>
							<a
								type="button"
								href="https://www.grupbancsabadell.com/corp/es/inicio.html"
								target="_blank"
								rel="noopener noreferrer"
								className="w-100 btn btn-lg bg-bluedark-investy text-white">
								Comienza Ahora
							</a>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card mb-4 rounded-3 shadow-sm border-bluedark-investy">
						<div className="card-header py-3 text-white bg-bluedark-investy border-bluedark-investy">
							<h4 className="my-0 fw-normal">Enterprise</h4>
						</div>
						<div className="card-body">
							<h1 className="card-title pricing-card-title">
								29€
								<small className="text-muted fw-light">/mes</small>
							</h1>
							<ul className="list-unstyled mt-3 mb-4">
								<li>Clientes, proveedores y productos ilimitados</li>
								<li>Facturas ilimitadas</li>
								<li>Prioridad de soporte email y telefónico</li>
								<li>Acceso prioritario a Help Center</li>
							</ul>
							<a
								type="button"
								className="w-100 btn btn-lg bg-bluedark-investy text-white"
								href="https://www.grupbancsabadell.com/corp/es/inicio.html"
								target="_blank"
								rel="noopener noreferrer">
								Contáctanos
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Pricing;
