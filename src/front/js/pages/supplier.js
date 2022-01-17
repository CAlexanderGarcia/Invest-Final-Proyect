import React from "react";
import ListSupplier from "../component/listSupplier";
import ModalSupplier from "../component/modalSupplier";
import FooterFixed from "../component/footerFixed";

const Supplier = () => {
	return (
		<div className="container-fluid justify-content-between">
			<div className="container-fluid navbar navbar-white bg-white">
				<button
					type="button"
					className="btn fs-5 buttom-nsi"
					data-bs-toggle="modal"
					data-bs-target={`#modal-create-supplier`}>
					<span id="span9" />
					<span id="span10" />
					<span id="span11" />
					<span id="span12" />
					Crear Proveedor
				</button>
				<ModalSupplier
					idModal="modal-create-supplier"
					buttonTitle="Crear Proveedor"
					modalHeader="Creación de Proveedor"
					nameButton="Crear"
					messageSuccess="El Proveedor fue creado con Exito"
					messageError="El Proveedor no fue creado. Inténtelo nuevamente"
					isCreated={true}
					supplier={{}}
				/>
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
