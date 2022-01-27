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
		if (data.name && data.address && data.postalCode && data.email && data.phoneNumber && data.nif) {
			props.isCreated
				? actions
						.createSupplier(data)
						.then(result => {
							actions.listSupplier(); //actualizo el listado de clientes independientemente de crear o modificar
							setData({});
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
							actions.listSupplier(); //actualizo el listado de clientes independientemente de crear o modificar
							setShowMessage({ error: false, message: props.messageSuccess });
						})
						.catch(err => {
							setShowMessage({ error: true, message: props.messageError });
						});
		} else {
			setShowMessage({ error: true, message: "Completa todos los campos del formulario" });
		}

		//	console.log("pepito");
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
								<div className="col-12 mb-3">
									<label htmlFor="supplier_name" className="col-2 text-white">
										Nombre
									</label>
									<input
										id="supplier_name"
										type="text"
										className="col-10 input-focus"
										name="name"
										onChange={handleInputChange}
										defaultValue={props.supplier.name}
									/>
								</div>

								<div className="col-12 mb-3">
									<label htmlFor="supplier_address" className="col-2 text-white">
										Dirección
									</label>
									<input
										id="supplier_address"
										type="text"
										className="col-10 input-focus"
										name="address"
										data-type="text"
										onChange={handleInputChange}
										defaultValue={props.supplier.address}
									/>
								</div>

								<div className="row mb-3">
									<div className="col-6">
										<label htmlFor="supplier_postalcode" className="col-7 text-white">
											Código Postal
										</label>
										<input
											id="supplier_postalcode"
											type="number"
											className="col-5 input-focus"
											min={0}
											name="postalCode"
											data-type="number"
											onChange={handleInputChange}
											defaultValue={props.supplier.postalCode}
										/>
									</div>

									<div className="col-6">
										<label htmlFor="supplier_phoneNumber" className="col-5 text-white">
											Teléfono
										</label>
										<input
											id="supplier_phoneNumber"
											type="number"
											className="col-7 input-focus"
											name="phoneNumber"
											data-type="number"
											onChange={handleInputChange}
											defaultValue={props.supplier.phoneNumber}
										/>
									</div>
								</div>

								<div className="row">
									<div className="col-7">
										<label htmlFor="supplier_email" className="col-3 text-white">
											Email
										</label>
										<input
											id="supplier_postalcode"
											type="email"
											className="col-9 input-focus"
											name="email"
											data-type="email"
											onChange={handleInputChange}
											defaultValue={props.supplier.email}
										/>
									</div>

									<div className="col-5">
										<label htmlFor="supplier_nif" className="col-3 text-white">
											NIF
										</label>
										<input
											id="supplier_nif"
											type="text"
											className="col-9 input-focus"
											name="nif"
											data-type="text"
											onChange={handleInputChange}
											defaultValue={props.supplier.nif}
										/>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<button type="submit" className="btn btn-lg shadow-lg mb-1 btn-formCreate rounded">
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
