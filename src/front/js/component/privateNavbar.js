import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import INVESTY_HORIZONTAL_BLANCO from "../../img/INVESTY_HORIZONTAL_BLANCO.png";
export const PrivateNavbar = () => {
	const { actions } = useContext(Context);
	const history = useHistory();
	const handleClick = event => {
		actions.removeToken();
		history.push("/");
	};
	return (
		<nav className="row navbar navbar-expand-xl navbar-dark bg-bluedark-investy m-0">
			<div className="col-10 container-fluid d-flex justify-content-between">
				<div className="navbar-brand">
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
								<Link to="/client" className="btn buttom-nsi fs-5 text-white">
									<span id="span9" />
									<span id="span10" />
									<span id="span11" />
									<span id="span12" />
									Clientes
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/product" className="btn buttom-nsi fs-5 text-white">
									<span id="span9" />
									<span id="span10" />
									<span id="span11" />
									<span id="span12" />
									Productos
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/supplier" className="btn buttom-nsi fs-5 text-white">
									<span id="span9" />
									<span id="span10" />
									<span id="span11" />
									<span id="span12" />
									Proveedores
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/listbills" className="btn buttom-nsi fs-5 text-white">
									<span id="span9" />
									<span id="span10" />
									<span id="span11" />
									<span id="span12" />
									Facturas
								</Link>
							</li>
							<li className="nav-item">
								<button className="btn buttom-nsi fs-5 text-secondary" onClick={handleClick}>
									<span id="span9" />
									<span id="span10" />
									<span id="span11" />
									<span id="span12" />
									Log Out
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default PrivateNavbar;
