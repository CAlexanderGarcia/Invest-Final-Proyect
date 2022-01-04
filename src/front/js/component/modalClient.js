import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const ModalClient = props => {
	const { actions } = useContext(Context);
	const [data, setData] = useState({});
	const [showMessage, setShowMessage] = useState();
	const handleInputChange = event => {
		if (Object.keys(data).length == 0) {
			setData({
				...props.client,
				[event.target.name]: event.target.value
			});
		} else {
			setData({
				...data,
				[event.target.name]: event.target.value
			});
		}
	};
	const handleFormSubmit = event => {
		event.preventDefault();
		setShowMessage({});
		props.isCreated
			? actions
					.createClient(data)
					.then(result => {
						actions.listClient(); //actualizo el listado de clientes independientemente de crear o modificar
						setShowMessage({ error: false, message: props.messageSuccess });
					})
					.catch(err => {
						setShowMessage({ error: true, message: props.messageError });
					})
			: actions
					.updateClient(data)
					.then(result => {
						actions.listClient(); //actualizo el listado de clientes independientemente de crear o modificar
						setShowMessage({ error: false, message: props.messageSuccess });
					})
					.catch(err => {
						setShowMessage({ error: true, message: props.messageError });
					});
		//	console.log("pepito");
	};
	return (
		<>
			<div className="modal fade" tabIndex="-1" id={props.idModal}>
				<div className="modal-dialog">
					<div className="modal-content modalCSP">
						<form onSubmit={handleFormSubmit}>
							<div className="modal-header">
								<h5 className="modal-title">{props.modalHeader}</h5>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								/>
							</div>
							<div className="modal-body">
								{showMessage && showMessage.message ? (
									<div
										className={`alert alert-${showMessage.error ? "danger" : "success"}`}
										role="alert">
										{showMessage.message}
									</div>
								) : (
									""
								)}
								<div className="m-3 p-2">
									<label htmlFor="client_name" className="col-sm-2 col-form-label">
										Nombre
									</label>
									<input
										id="client_name"
										type="text"
										className="input col-sm-10"
										name="name"
										onChange={handleInputChange}
										defaultValue={props.client.name}
									/>
								</div>

								<div className="m-3 p-2">
									<label htmlFor="client_nif" className="col-sm-2 col-form-label">
										NIF
									</label>
									<input
										id="client_nif"
										type="text"
										className="input col-sm-10"
										name="nif"
										data-type="text"
										onChange={handleInputChange}
										defaultValue={props.client.nif}
									/>
								</div>
								<div className="m-3 p-2">
									<label htmlFor="client_address" className="col-sm-2 col-form-label">
										Dirección
									</label>
									<input
										id="client_address"
										type="text"
										className="input col-sm-10"
										name="address"
										data-type="text"
										onChange={handleInputChange}
										defaultValue={props.client.address}
									/>
								</div>
								<div className="m-3 p-2">
									<label htmlFor="client_postalcode" className="col-2 col-form-label">
										Código Postal
									</label>
									<input
										id="client_postalcode"
										type="number"
										className="input col-sm-10"
										name="postalCode"
										data-type="number"
										onChange={handleInputChange}
										defaultValue={props.client.postalCode}
									/>
								</div>
							</div>
							<div className="modal-footer">
								<button type="submit" className="btn btn-lg text-info shadow mb-1 bg-body rounded">
									{props.nameButton}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

ModalClient.propTypes = {
	idModal: PropTypes.string,
	client: PropTypes.object,
	modalHeader: PropTypes.string,
	nameButton: PropTypes.string,
	messageSuccess: PropTypes.string,
	messageError: PropTypes.string,
	isCreated: PropTypes.bool
};

export default ModalClient;
