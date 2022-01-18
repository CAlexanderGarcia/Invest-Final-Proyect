import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import ModalProduct from "../component/modalProduct";

const ListProduct = () => {
	const { store, actions } = useContext(Context);
	const [currentProduct, setCurrentProduct] = useState({});

	useEffect(() => {
		actions.listProduct();
	}, []);

	return (
		<>
			<ModalProduct
				idModal="modal-change-product"
				buttonTitle="Modificar Producto"
				modalHeader="Modificación de Producto"
				nameButton="Modificar"
				messageSuccess="Modificación Exitosa"
				messageError="error de Modificar"
				isCreated={false}
				product={currentProduct ? currentProduct : {}}
			/>
			<table className="container table table-striped my-5 shadow-lg">
				<thead>
					<tr className="tr-CPP bluedark-investy">
						<th scope="col" className="th-CPP">
							ID
						</th>
						<th scope="col" className="th-CPP">
							Nombre
						</th>
						<th scope="col" className="th-CPP">
							Código
						</th>
						<th scope="col" className="th-CPP">
							Cantidad
						</th>
						<th scope="col" className="th-CPP">
							Precio
						</th>
						<th scope="col" className="th-CPP">
							Proveedor
						</th>
						<th />
					</tr>
				</thead>
				<tbody className="table-hover">
					{store.listProducts && store.listProducts.length > 0 ? (
						store.listProducts.map((value, index) => {
							return (
								<tr key={index}>
									<td className="col-1 td-CPP">{value.id}</td>
									<td className="col-3 text-center">{value.name}</td>
									<td className="col-2 text-center">{value.code}</td>
									<td className="col-1 text-center">{value.quantity}</td>
									<td className="col-2 text-center">{value.price}</td>
									<td className="col-2 text-center">{value.supplier_name}</td>
									<td className="col-1 text-center">
										<button
											onClick={() => {
												setCurrentProduct(value);
											}}
											className="link-pen btn btn-link p-0 mx-1"
											data-bs-toggle="modal"
											data-bs-target={"#modal-change-product"}>
											<i className="fas fa-pen" />
										</button>
										<button
											className="link-trash btn btn-link p-0 mx-1"
											onClick={() => {
												actions.deleteProduct(value.id).then(() => {
													actions.listProduct();
												});
												//actions.listProduct(); // ver la otra forma de actualizar el listado sin llamar al API
											}}>
											<i className="fas fa-trash" />
										</button>
									</td>
								</tr>
							);
						})
					) : (
						<tr>
							<td colSpan="12">No tiene productos añadidos</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
};

export default ListProduct;
