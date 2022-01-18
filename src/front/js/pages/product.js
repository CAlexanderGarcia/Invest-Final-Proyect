import React from "react";
import ListProduct from "../component/listProduct";
import ModalProduct from "../component/modalProduct";
import FooterFixed from "../component/footerFixed";
import products from "../../img/products.png";

const Product = () => {
	return (
		<div className="container justify-content-between">
			<h2 className="featurette-heading bluedark-investy mt-3">Productos</h2>
			<hr className="featurette-divider bluedark-investy" />
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<img src={products} className="img-fluid" />
					</div>

					<div className="col-md-8">
						<p className="lead">
							Desde esta sección puedes gestionar todos tus clientes; desde su creación hasta su
							eliminación. Posteriormente podrás visualizarlos y seleccionarlos en factura.
						</p>
						<div className="bg-white text-center">
							<button
								type="button"
								className="btn buttom-nsi fs-4 mt-5 fw-bold"
								data-bs-toggle="modal"
								data-bs-target={`#modal-create-product`}>
								<span id="span5" />
								<span id="span6" />
								<span id="span7" />
								<span id="span8" />
								CREAR PRODUCTO
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
					</div>
				</div>
			</div>
			<ListProduct />
			<FooterFixed />
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
