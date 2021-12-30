import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import ModalClient from "./modalClient";

const ListClient = () => {
	const { store, actions } = useContext(Context);
	const [currentClient, setCurrentClient] = useState({});

	useEffect(() => {
		actions.listClient();
	}, []);

	return (
		<>
			<ModalClient
				idModal="modal-change-client"
				buttonTitle="Modificar Cliente"
				modalHeader="Modificación de Clientes"
				nameButton="Modificar"
				messageSuccess="Modificación Exitosa"
				messageError="error de Modificar"
				isCreated={false}
				client={currentClient ? currentClient : {}}
			/>
			<table className="container table table-striped text-center table-fill my-5">
				<thead>
					<tr>
						<th scope="col" className="text-left">
							ID
						</th>
						<th scope="col" className="text-left">
							Name
						</th>
						<th scope="col" className="text-left">
							NIF
						</th>
						<th scope="col" className="text-left">
							Address
						</th>
						<th scope="col" className="text-left">
							Postal Code
						</th>
						<th />
					</tr>
				</thead>
				<tbody className="table-hover">
					{store.listClients && store.listClients.length > 0 ? (
						store.listClients.map((value, index) => {
							return (
								<tr key={index}>
									<td scope="row" className="text-center">
										{value.id}
									</td>
									<td className="text-center">{value.name}</td>
									<td className="text-center">{value.nif}</td>
									<td className="text-center">{value.address}</td>
									<td className="text-center">{value.postalCode}</td>
									<td>
										<button
											onClick={() => {
												setCurrentClient(value);
											}}
											className="px-2 ms-1 link-pen" //editar boton
											data-bs-toggle="modal"
											data-bs-target={"#modal-change-client"}>
											<i className="fas fa-pen" />
										</button>
										<button
											className="px-2 me-1 link-trash"
											onClick={() => {
												actions.deleteClient(value.id);
												actions.listClient(); // ver la otra forma de actualizar el listado sin llamar al API
											}}>
											<i className="fas fa-trash" />
										</button>
									</td>
								</tr>
							);
						})
					) : (
						<tr>
							<td colSpan="5">No tiene clientes</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
};

export default ListClient;
