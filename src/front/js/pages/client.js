import React from "react";
import ListClient from "../component/listClient";
import ModalClient from "../component/modalClient";
import FooterFixed from "../component/footerFixed";
import clientes from "../../img/clientes.png";

const Client = () => {
	return (
		<div className="container justify-content-between">
			<h2 className="featurette-heading bluedark-investy mt-3">Clientes</h2>
			<hr className="featurette-divider bluedark-investy" />
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<img src={clientes} className="img-fluid" />
					</div>

					<div className="col-md-8">
						<p className="lead">
							Desde esta sección puedes gestionar todos tus clientes; desde su creación hasta su
							eliminación. Posteriormente podrás visualizarlos y seleccionarlos en factura.
						</p>
						<div className="text-center">
							<button
								type="button"
								className="btn fs-4 buttom-nsi mt-5 fw-bold btn-create"
								data-bs-toggle="modal"
								data-bs-target={`#modal-create-client`}>
								<span id="span9" />
								<span id="span10" />
								<span id="span11" />
								<span id="span12" />
								CREAR CLIENTE
							</button>
							<ModalClient
								idModal="modal-create-client"
								buttonTitle="Crear Cliente"
								modalHeader="Añadir cliente"
								nameButton="Añadir"
								messageSuccess="El cliente fue añadido con éxito"
								messageError="El cliente no fue añadido. Inténtalo de nuevo"
								isCreated={true}
								client={{}}
							/>
						</div>
					</div>
				</div>
			</div>
			<ListClient />
			<FooterFixed />
		</div>
	);
};

/*<form className="form d-flex mx-3 pe-5">
					<input className="form-control" type="search" placeholder="Buscar Cliente" aria-label="Search" />
					<button type="submit" className="btn fs-5 buttom-nsi" data-bs-toggle="modal">
						<span id="span9" />
						<span id="span10" />
						<span id="span11" />
						<span id="span12" />
						Buscar
					</button>
</form>*/

export default Client;
