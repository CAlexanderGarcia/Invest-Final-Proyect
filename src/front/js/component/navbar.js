import React from "react";
import { Link } from "react-router-dom";
import Nosotros from "./nosotros.js";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">LOGO</span>
				</Link>
				<div className="ml-auto">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<div className="container-fluid">
							<a className="navbar-brand" href="#">
								Información
							</a>
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation">
								<span className="navbar-toggler-icon" />
							</button>
							<a className="navbar-brand" href="#">
								Servicios
							</a>
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation">
								<span className="navbar-toggler-icon" />
							</button>
							<a className="navbar-brand" href="#">
								<div>
									<Nosotros />
								</div>
							</a>
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation">
								<span className="navbar-toggler-icon" />
							</button>
							<div className="collapse navbar-collapse" id="navbarSupportedContent">
								<ul className="navbar-nav me-auto mb-2 mb-lg-0">
									<li className="nav-item">
										<a className="nav-link active" aria-current="page" href="#" />
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">
											Link
										</a>
									</li>
								</ul>
								<form className="d-flex">
									<button className="btn btn-outline-success" type="submit">
										REGISTRESE
									</button>
									<button className="btn btn-outline-primary" type="submit">
										LOGIN
									</button>
								</form>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</nav>
	);
};
