import React from "react";
import ListSupplier from "../component/listSupplier";
import ModalSupplier from "../component/modalSupplier";
import FooterFixed from "../component/footerFixed";
import suppliers from "../../img/supplier.png";

const Supplier = () => {
	return (
		<div className="container justify-content-between">
			<h2 className="featurette-heading bluedark-investy mt-3">Proveedores</h2>
			<hr className="featurette-divider bluedark-investy" />
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<img src={suppliers} className="img-fluid" />
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
								data-bs-target={`#modal-create-supplier`}>
								<span id="span9" />
								<span id="span10" />
								<span id="span11" />
								<span id="span12" />
								CREAR PROVEEDOR
							</button>
							<ModalSupplier
								idModal="modal-create-supplier"
								buttonTitle="Crear Proveedor"
								modalHeader="Añadir proveedor"
								nameButton="Añadir"
								messageSuccess="El proveedor fue añadido con éxito"
								messageError="El proveedor no fue añadido. Inténtalo de nuevo"
								isCreated={true}
								supplier={{}}
							/>
						</div>
					</div>
				</div>
			</div>
			<ListSupplier />
			<FooterFixed />
		</div>
	);
};

/*<form className="form d-flex mx-3 pe-5">
					<input className="form-control" type="search" placeholder="Buscar Proveedor" aria-label="Search" />
					<button type="submit" className="btn fs-5 buttom-nsi" data-bs-toggle="modal">
						<span id="span9" />
						<span id="span10" />
						<span id="span11" />
						<span id="span12" />
						Buscar
					</button>
				</form>*/

export default Supplier;
