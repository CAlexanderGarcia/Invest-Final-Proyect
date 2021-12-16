import React from "react";
import ModalRegisterSupplier from "../component/modalRegisterSupplier";

export const Suppliers = () => {
	return (
		<div>
			<nav className="container-fluid navbar navbar-light bg-light">
				<ModalRegisterSupplier />
				<form className="form">
					<input className="form-control" type="search" placeholder="Buscar proveedor" aria-label="Search" />
					<button type="submit" className="btn Modal fs-5" data-bs-toggle="modal">
						<span id="span5" />
						<span id="span6" />
						<span id="span7" />
						<span id="span8" />
						Search
					</button>
				</form>
			</nav>
		</div>
	);
};
