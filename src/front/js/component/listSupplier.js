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
							NIF
						</th>
						<th scope="col" className="th-CPP">
							Dirección
						</th>
						<th scope="col" className="th-CPP">
							C. Postal
						</th>
						<th scope="col" className="th-CPP">
							Email
						</th>
						<th scope="col" className="th-CPP">
							Télefono
						</th>
						<th />
					</tr>
				</thead>
				<tbody className="table-hover">
					{store.listSuppliers && store.listSuppliers.length > 0 ? (
						store.listSuppliers.map((value, index) => {
							return (
								<tr key={index}>
									<td className="col-1 td-CPP">{value.id}</td>
									<td className="col-2 text-center">{value.name}</td>
									<td className="col-2 text-center">{value.nif}</td>
									<td className="col-2 text-center">{value.address}</td>
									<td className="col-1 text-center">{value.postalCode}</td>
									<td className="col-2 text-center">{value.email}</td>
									<td className="col-1 text-center">{value.phoneNumber}</td>
									<td className="col-1 text-center">
										<button
											onClick={() => {
												setCurrentSupplier(value);
											}}
											className="link-pen btn btn-link p-0 mx-1" //editar boton
											data-bs-toggle="modal"
											data-bs-target={"#modal-change-supplier"}>
											<i className="fas fa-pen" />
										</button>
										<button
											className="link-trash btn btn-link p-0 mx-1"
											onClick={() => {
												actions.deleteSupplier(value.id).then(() => {
													actions.listSupplier();
												}); //actions.listSupplier();  ver la otra forma de actualizar el listado sin llamar al API
											}}>
											<i className="fas fa-trash" />
										</button>
									</td>
								</tr>
							);
						})
					) : (
						<tr>
							<td colSpan="8" className="text-center">
								No tiene proveedores añadidos
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
};

export default ListSupplier;
