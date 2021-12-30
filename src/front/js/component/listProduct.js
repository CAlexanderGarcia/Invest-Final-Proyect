import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import ModalProduct from "../component/modalProduct";

const ListProduct = () => {
	const { store, actions } = useContext(Context);
	const [currentClient, setCurrentProduct] = useState({});

	useEffect(() => {
		actions.listProduct();
	}, []);

	return (
		<>
			<ModalProduct
				idModal="modal-change-product"
				buttonTitle="Modificar Product"
				modalHeader="Modificación de Product"
				nameButton="Modificar"
				messageSuccess="Modificación Exitosa"
				messageError="error de Modificar"
				isCreated={false}
			/>
			<table className="container table table-striped text-center table-fill my-5">
				<thead>
					<tr>
						<th scope="col" className="text-left">
							ID
						</th>
						<th scope="col" className="text-left">
							Nombre
						</th>
						<th scope="col" className="text-left">
							Código
						</th>
						<th scope="col" className="text-left">
							Precio
						</th>
					</tr>
				</thead>
				<tbody className="table-hover">
					{store.listProduct && store.listProduct.length > 0 ? (
						store.listProduct.map((value, index) => {
							return (
								<tr key={index}>
									<td scope="row" className="text-center">
										{value.id}
									</td>
									<td className="text-center">{value.name}</td>
									<td className="text-center">{value.code}</td>
									<td className="text-center">{value.price}</td>
									<td>
										<button
											onClick={() => {
												setCurrentProduct(value);
											}}
											className="px-2 ms-1 link-pen"
											data-bs-toggle="modal"
											data-bs-target={"#modal-change-product"}>
											<i className="fas fa-pen" />
										</button>
										<button
											className="px-2 me-1 link-trash"
											onClick={() => {
												actions.deleteProduct(value.id);
												actions.listProduct(); // ver la otra forma de actualizar el listado sin llamar al API
											}}>
											<i className="fas fa-trash" />
										</button>
									</td>
								</tr>
							);
						})
					) : (
						<tr>
							<td colSpan="5">No tiene productos</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
};

export default ListProduct;
