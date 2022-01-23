import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ModalLogin from "../component/modalLogin";
import { Context } from "../store/appContext";
import PrivateNavbar from "../component/privateNavbar";
import INVESTY_HORIZONTAL_BLANCO from "../../img/INVESTY_HORIZONTAL_BLANCO.png";
import { HashLink } from "react-router-hash-link";

export const Navbar = () => {
	const { actions } = useContext(Context);
	return actions.getToken() ? (
		<PrivateNavbar />
	) : (
		<nav className="navbar navbar-expand-lg navbar-dark bg-bluedark-investy">
			<div className="container">
				<div className="navbar-brand">
					<Link to="/">
						<img src={INVESTY_HORIZONTAL_BLANCO} className="investy" />
					</Link>
				</div>
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
				<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<HashLink to="/#informacion-link" className="btn buttom-nsi text-white">
								<span id="span9" />
								<span id="span10" />
								<span id="span11" />
								<span id="span12" />
								Información
							</HashLink>
						</li>
						<li className="nav-item">
							<HashLink to="/#suscripciones-link" className="btn buttom-nsi text-white">
								<span id="span9" />
								<span id="span10" />
								<span id="span11" />
								<span id="span12" />
								Suscripciones
							</HashLink>
						</li>
						<li className="nav-item">
							<HashLink to="/#nosotros-link" className="btn buttom-nsi text-white">
								<span id="span9" />
								<span id="span10" />
								<span id="span11" />
								<span id="span12" />
								Nosotros
							</HashLink>
						</li>
						<li className="nav-item">
							<Link to="register-form" className="btn buttom-nsi text-white">
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
		</nav>
	);
};
