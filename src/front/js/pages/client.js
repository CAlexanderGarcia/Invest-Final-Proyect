import React from "react";
import ListClient from "../component/listClient";
import ModalClient from "../component/modalClient";
const Client = () => {
	return (
		<div className="container-fluid justify-content-between">
			<div className="container-fluid navbar navbar-white bg-white">
				<button
					type="button"
					className="btn fs-5"
					data-bs-toggle="modal"
					data-bs-target={`#modal-create-client`}>
					<span id="span5" />
					<span id="span6" />
					<span id="span7" />
					<span id="span8" />
					Crear Cliente
				</button>
				<ModalClient
					idModal="modal-create-client"
					buttonTitle="Crear Cliente"
					modalHeader="Creación de Clientes"
					nameButton="Crear"
					messageSuccess="El Cliente fue creado con Exito"
					messageError="El Cliente no fue creado"
					isCreated={true}
					client={{}}
				/>
				<form className="form d-flex mx-3 pe-5">
					<input className="form-control" type="search" placeholder="Buscar Cliente" aria-label="Search" />
					<button type="submit" className="btn fs-5" data-bs-toggle="modal">
						<span id="span5" />
						<span id="span6" />
						<span id="span7" />
						<span id="span8" />
						Buscar
					</button>
				</form>
			</div>
			<ListClient />
		</div>
	);
};

export default Client;
