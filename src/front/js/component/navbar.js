import React from "react";
import { Link } from "react-router-dom";
import Nosotros from "./nosotros.js";
import Servicios from "./servicios.js";
import Informacion from "./informacion.js";
import Resgistrese from "./registrese.js";
import Modal from "../component/modal";

export const Navbar = () => {
	return (
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

							<div className="collapse navbar-collapse" id="navbarSupportedContent">
								<form className="d-flex ml-5">
									<Resgistrese />

									<Modal />
								</form>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</nav>
	);
};
