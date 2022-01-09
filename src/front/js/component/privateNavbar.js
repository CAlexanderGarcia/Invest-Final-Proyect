import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const PrivateNavbar = () => {
	const { actions } = useContext(Context);
	const history = useHistory();
	const handleClick = event => {
		actions.removeToken();
		history.push("/");
	};
	return (
		<nav className="navbar navbar-dark bg-dark ">
			<div className="container navigation ">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 Investy">Investy</span>
				</Link>
				<div className="">
					<nav className=" navbar navbar-expand-sm navbar ms-1">
						<div className="container-fluid">
							<Link to="/client" className="btn buttom-nsi fs-5 me-4 text-white">
								<span id="span9" />
								<span id="span10" />
								<span id="span11" />
								<span id="span12" />
								Clientes
							</Link>
							<Link to="/product" className="btn buttom-nsi fs-5 me-4 text-white">
								<span id="span9" />
								<span id="span10" />
								<span id="span11" />
								<span id="span12" />
								Productos
							</Link>
							<Link to="/supplier" className="btn buttom-nsi fs-5 me-4 text-white">
								<span id="span9" />
								<span id="span10" />
								<span id="span11" />
								<span id="span12" />
								Proveedores
							</Link>
							<button className="btn buttom-nsi fs-5 me-4 text-secondary" onClick={handleClick}>
								<span id="span9" />
								<span id="span10" />
								<span id="span11" />
								<span id="span12" />
								Log Out
							</button>
						</div>
					</nav>
				</div>
			</div>
		</nav>
	);
};
export default PrivateNavbar;
