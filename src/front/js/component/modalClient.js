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
						{
							document.getElementById("myform").reset();
						}
					})
					.catch(err => {
						setShowMessage({ error: true, message: props.messageError });
					})
			: actions
					.updateClient(data)
					.then(result => {
						actions.listClient(); //actualizo el listado de clientes independientemente de crear o modificar
						setShowMessage({ error: false, message: props.messageSuccess });
						{
							document.getElementById("myform").reset();
						}
					})
					.catch(err => {
						setShowMessage({ error: true, message: props.messageError });
					});
	};
	return (
		<>
			<div className="modal fade" tabIndex="-1" id={props.idModal}>
				<div className="modal-dialog">
					<div className="modal-content modalCSP container-fluid">
						<form onSubmit={handleFormSubmit} id="myform">
							<div className="modal-header">
								<h5 className="modal-title text-white">{props.modalHeader}</h5>
								<button
									type="button"
									className="btn-close btn-close-white"
									data-bs-dismiss="modal"
									aria-label="Close"
								/>
							</div>
							<div className="modal-body container">
								{showMessage && showMessage.message ? (
									<div
										className={`alert alert-${showMessage.error ? "danger" : "success"}`}
										role="alert">
										{showMessage.message}
									</div>
								) : (
									""
								)}
								<div className="col-12">
									<label htmlFor="client_name" className="col-2 text-white">
										Nombre
									</label>
									<input
										id="client_name"
										type="text"
										className="col-10"
										name="name"
										onChange={handleInputChange}
										defaultValue={props.client.name}
									/>
								</div>

								<div className="col-12 my-3">
									<label htmlFor="client_address" className="col-2 text-white">
										Dirección
									</label>
									<input
										id="client_address"
										type="text"
										className="col-10"
										name="address"
										data-type="text"
										onChange={handleInputChange}
										defaultValue={props.client.address}
									/>
								</div>

								<div className="row">
									<div className="col-6">
										<label htmlFor="client_nif" className="col-2 text-white">
											NIF
										</label>
										<input
											id="client_nif"
											type="text"
											className="col-10"
											name="nif"
											data-type="text"
											onChange={handleInputChange}
											defaultValue={props.client.nif}
										/>
									</div>

									<div className="col-6">
										<label htmlFor="client_postalcode" className="col-6 text-white">
											Código Postal
										</label>
										<input
											id="client_postalcode"
											type="number"
											className="col-6"
											name="postalCode"
											data-type="number"
											onChange={handleInputChange}
											defaultValue={props.client.postalCode}
										/>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<button type="submit" className="btn btn-lg shadow-lg mb-1 rounded btn-formCreate">
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
