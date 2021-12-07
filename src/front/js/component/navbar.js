import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import Form from "./form";
=======
import Nosotros from "./nosotros.js";
import Servicios from "./servicios.js";
import Informacion from "./informacion.js";
import Resgistrese from "./registrese.js";
import Modal from "../component/modal";
>>>>>>> cd0b9a9b8e8c924b01e335c8fac88775c1cf4902

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container navigation ">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 jaf">JAF</span>
				</Link>
<<<<<<< HEAD
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Register</button>
					</Link>
=======
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
>>>>>>> cd0b9a9b8e8c924b01e335c8fac88775c1cf4902
				</div>
			</div>
		</nav>
	);
};
//fijarme los div y las etiquetas de cada componente!!!!!
//
