import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const ModalSupplier = props => {
	const { actions } = useContext(Context);
	const [data, setData] = useState({});
	const [showMessage, setShowMessage] = useState();
	const handleInputChange = event => {
		if (Object.keys(data).length == 0) {
			setData({
				...props.supplier,
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
					.createSupplier(data)
					.then(result => {
						actions.listSupplier(); //actualizo el listado de clientes independientemente de crear o modificar
						setShowMessage({ error: false, message: props.messageSuccess });
						{
							document.getElementById("myform").reset();
						}
					})
					.catch(err => {
						setShowMessage({ error: true, message: props.messageError });
					})
			: actions
					.updateSupplier(data)
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
		//	console.log("pepito");
	};
	return (
		<>
			<div className="modal fade" tabIndex="-1" id={props.idModal}>
				<div className="modal-dialog">
					<div className="modal-content modalCSP ">
						<form onSubmit={handleFormSubmit} id="myform">
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
									<label htmlFor="supplier_name" className="col-sm-2 col-form-label">
										Nombre
									</label>
									<input
										id="supplier_name"
										type="text"
										className="input col-sm-10 rounded"
										name="name"
										onChange={handleInputChange}
										defaultValue={props.supplier.name}
									/>
								</div>

								<div className="m-3 p-2">
									<label htmlFor="supplier_nif" className="col-sm-2 col-form-label">
										NIF
									</label>
									<input
										id="supplier_nif"
										type="text"
										className="input col-sm-10 rounded"
										name="nif"
										data-type="text"
										onChange={handleInputChange}
										defaultValue={props.supplier.nif}
									/>
								</div>
								<div className="m-3 p-2">
									<label htmlFor="supplier_address" className="col-sm-2 col-form-label">
										Dirección
									</label>
									<input
										id="supplier_address"
										type="text"
										className="input col-sm-10 rounded"
										name="address"
										data-type="text"
										onChange={handleInputChange}
										defaultValue={props.supplier.address}
									/>
								</div>
								<div className="m-3 p-2">
									<label htmlFor="supplier_postalcode" className="col-2 col-form-label">
										Código Postal
									</label>
									<input
										id="supplier_postalcode"
										type="number"
										className="input col-sm-10 rounded"
										name="postalCode"
										data-type="number"
										onChange={handleInputChange}
										defaultValue={props.supplier.postalCode}
									/>
								</div>
								<div className="m-3 p-2">
									<label htmlFor="supplier_email" className="col-2 col-form-label">
										Email
									</label>
									<input
										id="supplier_postalcode"
										type="email"
										className="input col-sm-10 rounded"
										name="email"
										data-type="email"
										onChange={handleInputChange}
										defaultValue={props.supplier.email}
									/>
								</div>
								<div className="m-3 p-2">
									<label htmlFor="supplier_phoneNumber" className="col-2 col-form-label">
										Télefono
									</label>
									<input
										id="supplier_phoneNumber"
										type="number"
										className="input col-sm-10 rounded"
										name="phoneNumber"
										data-type="number"
										onChange={handleInputChange}
										defaultValue={props.supplier.phoneNumber}
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

ModalSupplier.propTypes = {
	idModal: PropTypes.string,
	supplier: PropTypes.object,
	modalHeader: PropTypes.string,
	nameButton: PropTypes.string,
	messageSuccess: PropTypes.string,
	messageError: PropTypes.string,
	isCreated: PropTypes.bool
};

export default ModalSupplier;
