import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const ModalProduct = props => {
	const { actions, store } = useContext(Context);
	const [data, setData] = useState({});
	const [showMessage, setShowMessage] = useState();
	useEffect(() => {
		actions.listSupplier();
	}, []);
	const handleInputChange = event => {
		if (Object.keys(data).length == 0) {
			setData({
				...props.product,
				[event.target.name]:
					typeof event.target.value == "number" ? Math.abs(event.target.value) : event.target.value
			});
		} else {
			setData({
				...data,
				[event.target.name]:
					typeof event.target.value == "number" ? Math.abs(event.target.value) : event.target.value
			});
		}
	};
	const handleFormSubmit = event => {
		event.preventDefault();
		setShowMessage({});
		if (data.name && data.code && data.quantity && data.price) {
			props.isCreated
				? actions
						.createProduct(data)
						.then(result => {
							actions.listProduct(); //actualizo el listado de clientes independientemente de crear o modificar
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
						.updateProduct(data)
						.then(result => {
							actions.listProduct(); //actualizo el listado de clientes independientemente de crear o modificar
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
									<label htmlFor="product_name" className="col-2 text-white">
										Nombre
									</label>
									<input
										id="product_name"
										type="text"
										className="col-10 input-focus"
										name="name"
										onChange={handleInputChange}
										defaultValue={props.product.name}
									/>
								</div>

								<div className="row my-3">
									<div className="col-5">
										<label htmlFor="product_code" className="col-5 text-white">
											Código
										</label>
										<input
											id="product_code"
											type="text"
											className="col-7 input-focus"
											name="code"
											data-type="text"
											onChange={handleInputChange}
											defaultValue={props.product.code}
										/>
									</div>
									<div className="col-4 px-0">
										<label htmlFor="product_quantity" className="col-7 text-white">
											Cantidad
										</label>
										<input
											id="product_quantity"
											type="number"
											className="col-5 input-focus"
											name="quantity"
											min={0}
											data-type="text"
											onChange={handleInputChange}
											defaultValue={props.product.quantity}
										/>
									</div>
									<div className="col-3">
										<label htmlFor="product_price" className="col-4 text-white">
											€
										</label>
										<input
											id="product_price"
											type="number"
											className="col-8 input-focus"
											name="price"
											min={0}
											data-type="number"
											onChange={handleInputChange}
											defaultValue={props.product.price}
										/>
									</div>
								</div>
								<div className="col-12">
									<label htmlFor="product_supplier" className="col-3 text-white">
										Proveedores
									</label>
									<select
										id="product_supplier"
										className="col-9 p-2 input-focus"
										name="supplier"
										onChange={handleInputChange}
										required
										defaultValue="DEFAULT">
										<option disabled selected>
											Elige un proveedor
										</option>
										{store.listSuppliers.map((value, index) => {
											return (
												<option key={index} value={value.id}>
													{value.name}
												</option>
											);
										})}
									</select>
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

ModalProduct.propTypes = {
	idModal: PropTypes.string,
	product: PropTypes.object,
	modalHeader: PropTypes.string,
	nameButton: PropTypes.string,
	messageSuccess: PropTypes.string,
	messageError: PropTypes.string,
	isCreated: PropTypes.bool
};

export default ModalProduct;
