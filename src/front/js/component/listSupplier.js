import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import ModalSupplier from "./modalSupplier";

const ListSupplier = () => {
	const { store, actions } = useContext(Context);
	const [currentSupplier, setCurrentSupplier] = useState({});

	useEffect(() => {
		actions.listSupplier();
	}, []);

	return (
		<>
			<ModalSupplier
				idModal="modal-change-supplier"
				buttonTitle="Modificar Proveedores"
				modalHeader="Modificación de Proveedores"
				nameButton="Modificar"
				messageSuccess="Modificación Exitosa"
				messageError="error de Modificar"
				isCreated={false}
				supplier={currentSupplier ? currentSupplier : {}}
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
							NIF
						</th>
						<th scope="col" className="text-left">
							Dirección
						</th>
						<th scope="col" className="text-left">
							Código Postal
						</th>
						<th scope="col" className="text-left">
							Email
						</th>
						<th scope="col" className="text-left">
							Número de Télefono
						</th>
						<th />
					</tr>
				</thead>
				<tbody className="table-hover">
					{store.listSuppliers && store.listSuppliers.length > 0 ? (
						store.listSuppliers.map((value, index) => {
							return (
								<tr key={index}>
									<td scope="row" className="text-center">
										{value.id}
									</td>
									<td className="text-center">{value.name}</td>
									<td className="text-center">{value.nif}</td>
									<td className="text-center">{value.address}</td>
									<td className="text-center">{value.postalCode}</td>
									<td className="text-center">{value.email}</td>
									<td className="text-center">{value.phoneNumber}</td>
									<td>
										<button
											onClick={() => {
												setCurrentSupplier(value);
											}}
											className="px-2 ms-3 link-pen btn btn-link" //editar boton
											data-bs-toggle="modal"
											data-bs-target={"#modal-change-supplier"}>
											<i className="fas fa-pen" />
										</button>
										<button
											className="px-2 me-1 link-trash btn btn-link "
											onClick={() => {
												actions.deleteSupplier(value.id);
												actions.listSupplier(); // ver la otra forma de actualizar el listado sin llamar al API
											}}>
											<i className="fas fa-trash" />
										</button>
									</td>
								</tr>
							);
						})
					) : (
						<tr>
							<td colSpan="10">No tiene proveedores</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
};

export default ListSupplier;
