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
					.createProduct(data)
					.then(result => {
						actions.listProduct(); //actualizo el listado de clientes independientemente de crear o modificar
						setShowMessage({ error: false, message: props.messageSuccess });
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
									<label htmlFor="product_name" className="col-sm-2 col-form-label">
										Nombre
									</label>
									<input
										id="product_name"
										type="text"
										className="input col-sm-10"
										name="name"
										onChange={handleInputChange}
										defaultValue={props.product.name}
									/>
								</div>

								<div className="m-3 p-2">
									<label htmlFor="product_code" className="col-sm-2 col-form-label">
										Código
									</label>
									<input
										id="product_code"
										type="text"
										className="input col-sm-10"
										name="code"
										data-type="text"
										onChange={handleInputChange}
										defaultValue={props.product.code}
									/>
								</div>
								<div className="m-3 p-2">
									<label htmlFor="product_quantity" className="col-sm-2 col-form-label">
										Cantidad
									</label>
									<input
										id="product_quantity"
										type="text"
										className="input col-sm-10"
										name="quantity"
										data-type="text"
										onChange={handleInputChange}
										defaultValue={props.product.quantity}
									/>
								</div>
								<div className="m-3 p-2">
									<label htmlFor="product_price" className="col-2 col-form-label">
										Precio
									</label>
									<input
										id="product_price"
										type="number"
										className="input col-sm-10"
										name="price"
										data-type="number"
										onChange={handleInputChange}
										defaultValue={props.product.price}
									/>
								</div>
								<div className="m-3 p-2">
									<label htmlFor="product_supplier" className="col-2 col-form-label">
										Proveedores
									</label>
									<select
										id="product_supplier"
										className="input col-sm-10"
										name="supplier"
										onChange={handleInputChange}
										defaultValue={props.product.price}>
										<option value="" selected disabled hidden>
											-Choose here-
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
								<button type="submit" className="btn btn-primary">
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
