import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { object } from "prop-types";

const BillsForm = () => {
	const { actions } = useContext(Context);
	const [clients, setClients] = useState();
	const [products, setProducts] = useState();
	const [total, setTotal] = useState(0);
	const [dateBill, setDateBill] = useState(new Date().toDateString());
	const [numberBill, setNumberBill] = useState();
	const [currentUser, setCurrentUser] = useState();
	const [message, setMessage] = useState({ text: null, error: null });

	const [selectedClient, setSelectedClient] = useState();
	const [selectedProducts, setSelectedProducts] = useState([]);

	useEffect(() => {
		getUser();
		getClients();
		getProducts();
	}, []);

	useEffect(
		() => {
			let sumTotal = 0;
			for (let x in selectedProducts) {
				sumTotal += selectedProducts[x].productPrice;
				console.log(x);
			}
			setTotal(sumTotal);
		},
		[selectedProducts]
	);

	const getClients = async () => {
		const response = await fetch(process.env.BACKEND_URL + "/clients", {
			method: "GET",
			headers: {
				Authorization: "Bearer " + actions.getToken(),
				"Content-Type": "application/json"
			}
		});
		const data = await response.json();
		setClients(data.clients);
	};

	const getProducts = async () => {
		const responseProduct = await fetch(process.env.BACKEND_URL + "/products", {
			method: "GET",
			headers: {
				Authorization: "Bearer " + actions.getToken(),
				"Content-Type": "application/json"
			}
		});
		const dataProduct = await responseProduct.json();
		setProducts(
			dataProduct.products.map(product => {
				product["productPrice"] = product.price * 1.21;
				return product;
			})
		);
	};

	const getUser = async () => {
		const response = await fetch(process.env.BACKEND_URL + "/user", {
			method: "GET",
			headers: {
				Authorization: "Bearer " + actions.getToken(),
				"Content-Type": "application/json"
			}
		});
		const user = await response.json();
		setCurrentUser(user.user);
	};

	return (
		<div className="container">
			<div className="row g-3">
				{/* DATOS PERSONALES */}
				<div className="p-0 mt-5">
					<h2 className="featurette-heading bluedark-investy">Datos personales</h2>
					<hr className="featurette-divider bluedark-investy m-0" />
				</div>
				<div className="col-md-12">
					<div className="input-group">
						<span className="input-group-text bg-bluedark-investy text-white border-bluedark">Nombre</span>
						<input
							type="text"
							className="form-control border-bluedark"
							value={currentUser ? currentUser.surname : null}
							readOnly
							disabled
						/>
					</div>
				</div>
				<div className="col-md-8">
					<div className="input-group">
						<span className="input-group-text bg-bluedark-investy text-white border-bluedark">
							Dirección
						</span>
						<input
							type="text"
							className="form-control border-bluedark"
							value={currentUser ? currentUser.address : null}
							readOnly
							disabled
						/>
					</div>
				</div>
				<div className="col-md-4">
					<div className="input-group">
						<span className="input-group-text bg-bluedark-investy text-white border-bluedark">
							Compañia
						</span>
						<input
							type="text"
							className="form-control border-bluedark"
							value={currentUser ? currentUser.company : null}
							readOnly
							disabled
						/>
					</div>
				</div>
				<div className="col-md-2">
					<div className="input-group">
						<span className="input-group-text bg-bluedark-investy text-white border-bluedark">C.P.</span>
						<input
							type="text"
							className="form-control border-bluedark"
							value={currentUser ? currentUser.postalCode : null}
							readOnly
							disabled
						/>
					</div>
				</div>
				<div className="col-md-8">
					<div className="input-group">
						<span className="input-group-text bg-bluedark-investy text-white border-bluedark">Email</span>
						<input
							type="email"
							className="form-control border-bluedark"
							value={currentUser ? currentUser.email : null}
							readOnly
							disabled
						/>
					</div>
				</div>
				<div className="col-md-2">
					<div className="input-group">
						<span className="input-group-text bg-bluedark-investy text-white border-bluedark">DNI</span>
						<input
							type="text"
							className="form-control border-bluedark"
							value={currentUser ? currentUser.numberDocumentation : null}
							readOnly
							disabled
						/>
					</div>
				</div>
			</div>
			{/* FIN DATOS PERSONALES */}

			{/* INICIO DATOS CLIENTES */}
			<div className="p-0 mt-5">
				<h2 className="featurette-heading bluedark-investy">Datos de cliente</h2>
				<hr className="featurette-divider bluedark-investy m-0" />
			</div>
			<div className="col-12 pt-0 mt-2">
				<label htmlFor="inputState" className="form-label my-0 bluedark-investy">
					Lista de clientes
					<i className="fas fa-plus ms-2 bluedark-investy" />
				</label>
				<select
					onChange={e => setSelectedClient(clients.find(x => x.id.toString() == e.target.value))}
					id="inputState"
					className="form-select mb-3 border-1 border-bluedark-investy input-focus">
					<option selected>Pulsa aquí para agregar un cliente</option>
					{clients
						? clients.map((x, y) => {
								return (
									<option value={x.id} key={x.id}>
										{x.name}
									</option>
								);
						  })
						: null}
				</select>
			</div>

			<div className="row g-3">
				<div className="col-md-9">
					<div className="input-group">
						<span className="input-group-text bg-bluedark-investy text-white border-bluedark">Nombre</span>
						<input
							type="text"
							className="form-control border-bluedark"
							name="name"
							value={selectedClient ? selectedClient.name : ""}
							readOnly
							disabled
						/>
					</div>
				</div>
				<div className="col-md-3">
					<div className="input-group">
						<span className="input-group-text bg-bluedark-investy text-white border-bluedark">NIF</span>
						<input
							type="text"
							className="form-control border-bluedark"
							name="nif"
							value={selectedClient ? selectedClient.nif : ""}
							readOnly
							disabled
						/>
					</div>
				</div>
				<div className="col-md-10">
					<div className="input-group">
						<span className="input-group-text bg-bluedark-investy text-white border-bluedark">
							Dirección
						</span>
						<input
							type="text"
							className="form-control border-bluedark"
							name="address"
							value={selectedClient ? selectedClient.address : ""}
							readOnly
							disabled
						/>
					</div>
				</div>
				<div className="col-md-2">
					<div className="input-group">
						<span className="input-group-text bg-bluedark-investy text-white border-bluedark">C.P.</span>
						<input
							type="text"
							className="form-control border-bluedark"
							name="postalCode"
							value={selectedClient ? selectedClient.postalCode : ""}
							readOnly
							disabled
						/>
					</div>
				</div>
				{/* FIN DATOS CLIENTES */}

				{/* INICIO FORMULARIO FACTURA */}
				<div className="p-0 mt-5">
					<h2 className="featurette-heading bluedark-investy">Datos de factura</h2>
					<hr className="featurette-divider bluedark-investy m-0" />
				</div>
				{/* PRODUCT SELECT */}
				<div className="col-md-4 pt-0 mt-2">
					<label htmlFor="inputProduct" className="form-label my-0">
						Lista de productos
						<i className="fas fa-plus ms-2 bluedark-investy" />
					</label>
					<select
						onChange={e => {
							if (!selectedProducts.map(x => x.id.toString()).includes(e.target.value)) {
								setSelectedProducts([
									...selectedProducts,
									{
										...products.find(p => p.id.toString() == e.target.value),
										quantity: 1
									}
								]);
								e.target.value = 0;
							}
						}}
						className="form-select mb-3 border-1 border-bluedark-investy input-focus">
						<option value={0} selected>
							Pulsa aquí para agregar un producto
						</option>
						{products
							? products.map((p, y) => {
									return (
										<option value={p.id} key={p.id}>
											{p.name}
										</option>
									);
							  })
							: null}
					</select>
				</div>
				<div className="col-md-4 pt-0 mt-2">
					<label htmlFor="inputBillId" className="form-label my-0">
						Nº Factura
						<i className="fas fa-file-invoice ms-2 bluedark-investy" />
					</label>
					<input
						type="text"
						className="form-control input-focus border-bluedark"
						value={numberBill}
						onChange={e => setNumberBill(e.target.value)}
						required
					/>
				</div>
				<div className="col-md-4 pt-0 mt-2">
					<label
						htmlFor="inputDate"
						className="form-label my-0"
						value={dateBill}
						onChange={e => setDateBill(e.target.value)}
						required>
						Fecha factura
						<i className="fas fa-calendar-alt ms-2 bluedark-investy" />
					</label>
					<input
						type="text"
						className="form-control border-bluedark"
						value={new Date().toLocaleString() + ""}
						readOnly
						disabled
					/>
				</div>

				{/* PRODUCTS NAME */}
				<div>
					{selectedProducts.map((product, i) => {
						return (
							<div className="row mb-2" key={i}>
								<div className="col-lg-2 col-sm-2">
									{i == 0 ? (
										<label htmlFor="inputCode" className="form-label text-center bluedark-investy">
											Referencia
										</label>
									) : null}
									<input
										type="text"
										className="form-control border-bluedark"
										name="code"
										value={product.code}
										readOnly
										disabled
									/>
								</div>
								<div className="col-lg-5 col-sm-4">
									{i == 0 ? (
										<label
											htmlFor="nameProducts"
											className="form-label text-center bluedark-investy">
											Nombre del producto
										</label>
									) : null}
									<input
										type="text"
										className="form-control border-bluedark"
										name="nameProduct"
										value={product.name}
										readOnly
										disabled
									/>
								</div>

								{/* PRICE */}
								<div className="col-lg-1 col-sm-1">
									{i == 0 ? (
										<label
											htmlFor="inputQuantityUnity"
											className="form-label text-center bluedark-investy">
											P.U.
										</label>
									) : null}
									<input
										type="number"
										className="form-control text-end border-bluedark"
										name="price"
										value={product.price}
										readOnly
										disabled
									/>
								</div>

								{/* TAX */}
								<div className="col-lg-1 col-sm-1">
									{i == 0 ? (
										<label htmlFor="inputTax" className="form-label text-center bluedark-investy">
											IVA
										</label>
									) : null}
									<input
										type="text"
										className="form-control text-end border-bluedark"
										name="tax"
										value={21}
										readOnly
									/>
								</div>

								{/* QUANTITY */}
								<div className="col-lg-1 col-sm-2">
									{i == 0 ? (
										<label htmlFor="inputQuantity" className="form-label text-end bluedark-investy">
											Cantidad
										</label>
									) : null}
									<input
										type="number"
										className="form-control text-end input-focus border-bluedark"
										defaultValue={1}
										onChange={e => {
											let quantity = products.find(x => x.id == product.id).quantity;
											if (
												parseFloat(e.target.value) <= quantity &&
												parseFloat(e.target.value) > 1
											) {
												setSelectedProducts(
													selectedProducts.map(x => {
														if (x.id == product.id) {
															return {
																...product,
																quantity: parseFloat(e.target.value),
																productPrice:
																	parseFloat(e.target.value) *
																	parseFloat(product.price) *
																	1.21
															};
														} else {
															return x;
														}
													})
												);
											} else if (parseFloat(e.target.value) > quantity) {
												e.target.value = quantity;
												setSelectedProducts(
													selectedProducts.map(x => {
														if (x.id == product.id) {
															return {
																...product,
																quantity: quantity,
																productPrice:
																	parseFloat(e.target.value) *
																	parseFloat(product.price) *
																	1.21
															};
														} else {
															return x;
														}
													})
												);
											} else if (parseFloat(e.target.value) <= 1) {
												e.target.value = 1;
												setSelectedProducts(
													selectedProducts.map(x => {
														if (x.id == product.id) {
															return {
																...product,
																quantity: 1,
																productPrice: parseFloat(product.price) * 1.21
															};
														} else {
															return x;
														}
													})
												);
											}
										}}
									/>
								</div>

								{/* PRICE * QUANTITY */}
								<div className="col-lg-2 col-sm-2">
									{i == 0 ? (
										<label htmlFor="inputPrice" className="form-label text-center bluedark-investy">
											Subtotal
										</label>
									) : null}
									<div className="d-flex">
										<input
											type="number"
											className="form-control text-end input-focus border-bluedark"
											value={product.productPrice.toFixed(2)}
										/>
										<i
											onClick={() =>
												setSelectedProducts(selectedProducts.filter((x, y) => y != i))
											}
											className="fas fa-trash link-trash2 fs-3 ms-3 mt-1"
										/>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				<div className="col-3 offset-9 text-end mt-5">
					<div className="input-group">
						<span className="input-group-text fw-bold total-red border-bluedark">Total €</span>
						<input
							type="number"
							className="form-control text-end fw-bold border-bluedark"
							readOnly
							value={total.toFixed(2)}
						/>
					</div>
				</div>

				{/* BUTTON */}
				<div className="col-12 text-end">
					<button
						type="submit"
						className="btn btn-valoration2 p-3 shadow-lg"
						onClick={async () => {
							if (
								selectedClient != null &&
								numberBill != null &&
								numberBill != "" &&
								selectedProducts.length > 0
							) {
								let response = await actions.createBill({
									client_id: selectedClient.id,
									number_bill: numberBill,
									date_bill: dateBill,
									products: selectedProducts,
									total: total
								});
								if (response == true) {
									setMessage({ text: "Factura creada correctamente", error: false });
								} else {
									setMessage({ text: "Factura no creada", error: true });
								}
							} else if (selectedClient == null) {
								setMessage({ text: "Selecciona un cliente", error: true });
							} else if (numberBill == null || numberBill == "") {
								setMessage({ text: "Escribe un número de factura", error: true });
							} else if (selectedProducts.length == 0) {
								setMessage({ text: "Selecciona un producto", error: true });
							}
						}}>
						Generar factura
					</button>
				</div>
			</div>
			{message.error == false ? (
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-body">
							<p>{message.text}</p>
						</div>
						<div className="modal-footer">
							<Link to="/listBills">
								<button className="btn btn-formCreate2 shadow-lg">Volver a facturas</button>
							</Link>
						</div>
					</div>
				</div>
			) : message.error == true ? (
				<div className="modal-backdrop fade show" tabIndex="-1">
					<div className="modal-dialog bg-dark">
						<div className="modal-content">
							<div className="modal-body">
								<p>{message.text}</p>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									onClick={() => setMessage({ text: null, error: null })}
									className="btn btn-secondary">
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};
export default BillsForm;
