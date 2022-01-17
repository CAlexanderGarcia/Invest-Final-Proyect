import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ModalLogin from "../component/modalLogin";
import { Context } from "../store/appContext";
import PrivateNavbar from "../component/privateNavbar";
import INVESTY_HORIZONTAL_BLANCO from "../../img/INVESTY_HORIZONTAL_BLANCO.png";

export const Navbar = () => {
	const { actions } = useContext(Context);
	return actions.getToken() ? (
		<PrivateNavbar />
	) : (
		<nav className="row navbar navbar-expand-xl navbar-dark bg-bluedark-investy">
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
								<a className="btn buttom-nsi fs-5 text-white" href="#informacion-link">
									<span id="span9" />
									<span id="span10" />
									<span id="span11" />
									<span id="span12" />
									Información
								</a>
							</li>
							<li className="nav-item">
								<a className="btn buttom-nsi fs-5 text-white" href="#suscripciones-link">
									<span id="span9" />
									<span id="span10" />
									<span id="span11" />
									<span id="span12" />
									Suscripciones
								</a>
							</li>
							<li className="nav-item">
								<a className="btn buttom-nsi fs-5 text-white" href="#nosotros-link">
									<span id="span9" />
									<span id="span10" />
									<span id="span11" />
									<span id="span12" />
									Nosotros
								</a>
							</li>
							<li className="nav-item">
								<Link to="register-form" className="btn buttom-nsi fs-5 text-white">
									<span id="span1" />
									<span id="span2" />
									<span id="span3" />
									<span id="span4" />
									Regístrate
								</Link>
							</li>
							<li className="nav-item">
								<ModalLogin />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
