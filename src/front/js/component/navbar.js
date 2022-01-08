import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Nosotros from "./nosotros.js";
import Servicios from "./servicios.js";
import Informacion from "./informacion.js";
import ModalLogin from "../component/modalLogin";
import { Context } from "../store/appContext";
import PrivateNavbar from "../component/privateNavbar";

export const Navbar = () => {
	const { actions } = useContext(Context);
	const token = actions.getToken();
	useEffect(() => {
		actions.getToken();
	}, []);
	return token ? (
		<PrivateNavbar />
	) : (
		<nav className="navbar navbar-light bg-light">
			<div className="container navigation ">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 jaf">JAF</span>
				</Link>
				<div className="">
					<nav className="navbar navbar-expand-sm navbar-light bg-light">
						<div className="container-fluid">
							<Informacion />

							<Servicios />

							<Nosotros />

							<Link to="register-form" className="btn buttom-nsi fs-5 me-4">
								<span id="span1" />
								<span id="span2" />
								<span id="span3" />
								<span id="span4" />
								Regístrese
							</Link>

							<ModalLogin />
						</div>
					</nav>
				</div>
			</div>
		</nav>
	);
};
