import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Nosotros from "./nosotros.js";
import Servicios from "./servicios.js";
import Informacion from "./informacion.js";
import ModalLogin from "../component/modalLogin";
import { Context } from "../store/appContext";
import PrivateNavbar from "../component/privateNavbar";
import INVESTY_HORIZONTAL_BLANCO from "../../img/INVESTY_HORIZONTAL_BLANCO.png";

export const Navbar = () => {
	const { actions } = useContext(Context);
	const token = actions.getToken();
	useEffect(() => {
		actions.getToken();
	}, []);
	return token ? (
		<PrivateNavbar />
	) : (
		<nav className="row navbar navbar-expand-xl navbar-dark bg-dark">
			<div className="col-10 container-fluid d-flex justify-content-between">
				<div className="navbar-nav">
					<Link to="/">
						<img src={INVESTY_HORIZONTAL_BLANCO} className="investy" />
					</Link>
				</div>
				<div className="navbar-brand">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page">
									<Informacion />
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link">
									<Servicios />
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link">
									<Nosotros />
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link">
									<Link to="register-form" className="btn buttom-nsi fs-5 me-4 text-white">
										<span id="span1" />
										<span id="span2" />
										<span id="span3" />
										<span id="span4" />
										Regístrese
									</Link>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link">
									<ModalLogin />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
