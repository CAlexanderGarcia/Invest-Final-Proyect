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
					<tr className="tr-CPP">
						<th scope="col" className="text-left th-CPP">
							ID
						</th>
						<th scope="col" className="text-left th-CPP">
							Nombre
						</th>
						<th scope="col" className="text-left th-CPP">
							NIF
						</th>
						<th scope="col" className="text-left th-CPP">
							Dirección
						</th>
						<th scope="col" className="text-left th-CPP">
							Código Postal
						</th>
						<th />
					</tr>
				</thead>
				<tbody className="table-hover">
					{store.listClients && store.listClients.length > 0 ? (
						store.listClients.map((value, index) => {
							return (
								<tr key={index}>
									<td scope="row" className="text-center td-CPP">
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
											className="px-2 ms-3 link-pen btn btn-link" //editar boton
											data-bs-toggle="modal"
											data-bs-target={"#modal-change-client"}>
											<i className="fas fa-pen" />
										</button>
										<button
											className="px-2 me-1 link-trash btn btn-link "
											onClick={() => {
												actions.deleteClient(value.id).then(data => actions.listClient());
											}}>
											<i className="fas fa-trash" />
										</button>
									</td>
								</tr>
							);
						})
					) : (
						<tr>
							<td colSpan="6">No tiene clientes</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
};

export default ListClient;
