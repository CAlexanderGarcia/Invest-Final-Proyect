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
									<td className="col-1 td-CPP">{value.id}</td>
									<td className="col-3 text-center">{value.name}</td>
									<td className="col-2 text-center">{value.nif}</td>
									<td className="col-3 text-center">{value.address}</td>
									<td className="col-2 text-center">{value.postalCode}</td>
									<td className="col-1 text-center">
										<button
											onClick={() => {
												setCurrentClient(value);
											}}
											className="link-pen btn btn-link p-0 mx-1" //Botón Editar
											data-bs-toggle="modal"
											data-bs-target={"#modal-change-client"}>
											<i className="fas fa-pen" />
										</button>
										<button
											className="link-trash btn btn-link p-0 mx-1" // Botón Borrar
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
							<td colSpan="6" className="text-center">
								No tiene clientes añadidos
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
};

export default ListClient;
