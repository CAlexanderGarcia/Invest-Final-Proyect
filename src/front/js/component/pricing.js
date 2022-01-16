import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
	return (
		<div className="container">
			<div className="pricing-header p-3 pb-md-4 mx-auto text-center">
				<h1 className="display-4 fw-normal">Membresía</h1>
				<p className="fs-5 text-muted">
					Como un sitio de membresías, siempre nos enfocamos en reducir la cancelación y aumentar la
					satisfacción. Sabemos que recopilar el feedback de los clientes a lo largo del ciclo de vida del
					mismo nos ha permitido lograr ambos objetivos
				</p>
			</div>

			<div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
				<div className="col">
					<div className="card mb-4 rounded-3 shadow-sm">
						<div className="card-header py-3">
							<h4 className="my-0 fw-normal">Free</h4>
						</div>
						<div className="card-body">
							<h1 className="card-title pricing-card-title">
								<small className="text-muted fw-light" />
							</h1>
							<ul className="list-unstyled mt-3 mb-4">
								<li>10 Usuarios Incluídos</li>
								<li>2 GB de Almacenamiento</li>
								<li>Soporte Email</li>
								<li>Ayuda a través de Help Center</li>
							</ul>
							<button type="button" className="w-100 btn btn-lg btn-outline-primary">
								<Link to="/register-form">Regístrate Gratis</Link>
							</button>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card mb-4 rounded-3 shadow-sm">
						<div className="card-header py-3">
							<h4 className="my-0 fw-normal">Pro</h4>
						</div>
						<div className="card-body">
							<h1 className="card-title pricing-card-title">
								€15
								<small className="text-muted fw-light">/mes</small>
							</h1>
							<ul className="list-unstyled mt-3 mb-4">
								<li>20 Usuarios Incluídos</li>
								<li>10 GB de Almacenamiento</li>
								<li>Prioridad de Soporte Email</li>
								<li>Acceso a Help Center</li>
							</ul>
							<a
								type="button"
								href="https://www.grupbancsabadell.com/corp/es/inicio.html"
								target="_blank"
								rel="noopener noreferrer"
								className="w-100 btn btn-lg btn-primary">
								Comienza Ahora
							</a>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card mb-4 rounded-3 shadow-sm border-primary">
						<div className="card-header py-3 text-white bg-primary border-primary">
							<h4 className="my-0 fw-normal">Enterprise</h4>
						</div>
						<div className="card-body">
							<h1 className="card-title pricing-card-title">
								€29
								<small className="text-muted fw-light">/mes</small>
							</h1>
							<ul className="list-unstyled mt-3 mb-4">
								<li>50 Usuarios Incluídos</li>
								<li>25 GB de Almacenamiento</li>
								<li>Soporte Email y Telefónico</li>
								<li>Acceso y Prioridad en Help Center</li>
							</ul>
							<a
								type="button"
								className="w-100 btn btn-lg btn-primary"
								href="https://www.grupbancsabadell.com/corp/es/inicio.html"
								target="_blank"
								rel="noopener noreferrer">
								Contáctanos
							</a>
						</div>
					</div>
				</div>
			</div>

			<h2 className="display-6 text-center mb-4">Comparación de Planes</h2>

			<div className="table-responsive">
				<table className="table text-center">
					<thead>
						<tr>
							<th style={{ width: "34%" }} />
							<th style={{ width: "22%" }}>Free</th>
							<th style={{ width: "22%" }}>Pro</th>
							<th style={{ width: "22%" }}>Enterprise</th>
						</tr>
					</thead>
					<tbody>
						<tr className="">
							<th scope="row" className="text-start table-primary">
								Público
							</th>
							<td>
								<svg className="bi table-success " width="24" height="24">
									<use xlinkHref="#check" />
								</svg>
							</td>
							<td>
								<svg className="bi table-success" width="24" height="24">
									<use xlinkHref="#check" />
								</svg>
							</td>
							<td>
								<svg className="bi table-success" width="24" height="24">
									<use xlinkHref="#check" />
								</svg>
							</td>
						</tr>
						<tr>
							<th scope="row" className="text-start table-primary">
								Privacidad
							</th>
							<td />
							<td className="table-success">
								<svg className="bi table-success" width="24" height="24">
									<use xlinkHref="#check" />
								</svg>
							</td>
							<td>
								<svg className="bi table-success" width="24" height="24">
									<use xlinkHref="#check" />
								</svg>
							</td>
						</tr>
					</tbody>

					<tbody>
						<tr className="table-front">
							<th scope="row" className="text-start table-primary">
								Permisos
							</th>
							<td className="table-front">
								<svg className="bi table-success" width="24" height="24">
									<i className="fas fa-check" />
								</svg>
							</td>
							<td>
								<svg className="bi table-success" width="24" height="24">
									<use xlinkHref="#check" />
								</svg>
							</td>
							<td>
								<svg className="bi table-success" width="24" height="24">
									<use xlinkHref="#check" />
								</svg>
							</td>
						</tr>
						<tr>
							<th scope="row" className="text-start table-primary">
								Sharing
							</th>
							<td />
							<td>
								<svg className="bi table-success" width="24" height="24">
									<use xlinkHref="#check" />
								</svg>
							</td>
							<td>
								<svg className="bi table-success" width="24" height="24">
									<use xlinkHref="#check" />
								</svg>
							</td>
						</tr>
						<tr>
							<th scope="row" className="text-start table-primary">
								Miembros Ilimitados
							</th>
							<td />
							<td>
								<svg className="bi table-success" width="24" height="24">
									<use xlinkHref="#check" />
								</svg>
							</td>
							<td>
								<svg className="bi table-success" width="24" height="24">
									<use xlinkHref="#check" />
								</svg>
							</td>
						</tr>
						<tr>
							<th scope="row" className="text-start table-primary">
								Extra Seguridad
							</th>
							<td />
							<td />
							<td>
								<svg className="bi table-success" width="24" height="24">
									<use xlinkHref="#check" />
								</svg>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};
export default Pricing;
