import React from "react";
import ListProduct from "../component/listProduct";
import ModalProduct from "../component/modalProduct";
const Product = () => {
	return (
		<div className="container-fluid justify-content-between">
			<div className="container-fluid navbar navbar-white bg-white">
				<button
					type="button"
					className="btn buttom-nsi fs-5"
					data-bs-toggle="modal"
					data-bs-target={`#modal-create-product`}>
					<span id="span5" />
					<span id="span6" />
					<span id="span7" />
					<span id="span8" />
					Añadir Productos
				</button>
				<ModalProduct
					idModal="modal-create-product"
					buttonTitle="Añadir Productos"
					modalHeader="Agregar Productos"
					nameButton="Agregar"
					messageSuccess="El Producto fue añadido con éxito"
					messageError="El Producto no fue añadido"
					isCreated={true}
					product={{}}
				/>
			</div>
			<ListProduct />
		</div>
	);
};

/*<form className="form d-flex mx-3 pe-5">
					<input className="form-control" type="search" placeholder="Buscar Productos" aria-label="Search" />
					<button type="submit" className="btn Modal fs-5" data-bs-toggle="modal">
						<span id="span5" />
						<span id="span6" />
						<span id="span7" />
						<span id="span8" />
						Buscar
					</button>
				</form>*/

export default Product;
