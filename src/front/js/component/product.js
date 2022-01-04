import React from "react";
import ListProduct from "../component/listProduct";


const Product = () => {
	return (
		<div className="container-fluid justify-content-between">
			<div className="container-fluid navbar navbar-white bg-white">
				<button
					type="button"
					className="btn fs-5 buttom-nsi"
					data-bs-toggle="modal"
					data-bs-target={`#modal-create-product`}>
					<span id="span9" />
					<span id="span10" />
					<span id="span11" />
					<span id="span12" />
					Crear Producto
				</button>
				
				<form className="form d-flex mx-3 pe-5">
					<input className="form-control" type="search" placeholder="Buscar Producto" aria-label="Search" />
					<button type="submit" className="btn fs-5 buttom-nsi" data-bs-toggle="modal">
						<span id="span9" />
						<span id="span10" />
						<span id="span11" />
						<span id="span12" />
						Buscar
					</button>
				</form>
			</div>
			<ListProduct />
		</div>
	);
};

export default Product;
