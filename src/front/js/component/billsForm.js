import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";

const BillsForm = () => {
	const { actions, store } = useContext(Context);
	const [clients, setClients] = useState();
	const [products, setProducts] = useState();
	const [total, setTotal] = useState(0);

	const [selectedClient, setSelectedClient] = useState();
	const [selectedProduct, setSelectedProduct] = useState([]);

	useEffect(() => {
		getClients();
		getProducts();
	}, []);

	useEffect(
		() => {
			let sumTotal = 0;
			for (let x in selectedProduct) {
				sumTotal += selectedProduct[x].productPrice;
				console.log(x);
			}
			setTotal(sumTotal);
		},
		[selectedProduct]
	);

	const getClients = async () => {
		const response = await fetch("https://3001-blue-anteater-g71sf0ld.ws-eu27.gitpod.io/api/clients", {
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
		const responseProduct = await fetch("https://3001-blue-anteater-g71sf0ld.ws-eu27.gitpod.io/api/products", {
			method: "GET",
			headers: {
				Authorization: "Bearer " + actions.getToken(),
				"Content-Type": "application/json"
			}
		});
		const dataProduct = await responseProduct.json();
		setProducts(
			dataProduct.products.map(product => {
				product["productPrice"] = 0;
				return product;
			})
		);
	};

	return (
		<div className="container">
			<div className="row g-3">
				{/* DATOS PERSONALES */}
				<h2>Datos personales</h2>
				<div className="col-md-6">
					<div className="input-group">
						<span className="input-group-text">Nombre</span>
						<input type="text" className="form-control" value="Fredy" readOnly disabled />
					</div>
				</div>
				<div className="col-md-6">
					<div className="input-group">
						<span className="input-group-text">Apellidos</span>
						<input type="text" className="form-control" value="Moreno" readOnly disabled />
					</div>
				</div>
				<div className="col-md-8">
					<div className="input-group">
						<span className="input-group-text">Dirección</span>
						<input
							type="text"
							className="form-control"
							value="Avenida Principal 4, Madrid"
							readOnly
							disabled
						/>
					</div>
				</div>
				<div className="col-md-4">
					<div className="input-group">
						<span className="input-group-text">Compañia</span>
						<input type="text" className="form-control" value="Coca-Cola" readOnly disabled />
					</div>
				</div>
				<div className="col-md-2">
					<div className="input-group">
						<span className="input-group-text">C.P.</span>
						<input type="text" className="form-control" value="12345" readOnly disabled />
					</div>
				</div>
				<div className="col-md-8">
					<div className="input-group">
						<span className="input-group-text">Email</span>
						<input type="email" className="form-control" value="info@fredymoreno.es" readOnly disabled />
					</div>
				</div>
				<div className="col-md-2">
					<div className="input-group">
						<span className="input-group-text">DNI</span>
						<input type="text" className="form-control" value="1234567" readOnly disabled />
					</div>
				</div>
			</div>
			{/* FIN DATOS PERSONALES */}

			{/* INICIO DATOS CLIENTES */}
			<h2 className="mt-4">Datos Cliente</h2>
			<div className="col-12">
				<label htmlFor="inputState" className="form-label">
					Lista de clientes
				</label>
				<select
					onChange={e => setSelectedClient(clients.find(x => x.id.toString() == e.target.value))}
					id="inputState"
					className="form-select mb-3">
					<option selected>Seleccionar cliente...</option>
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
						<span className="input-group-text">Nombre</span>
						<input
							type="text"
							className="form-control"
							name="name"
							value={selectedClient ? selectedClient.name : ""}
							readOnly
							disabled
						/>
					</div>
				</div>
				<div className="col-md-3">
					<div className="input-group">
						<span className="input-group-text">NIF</span>
						<input
							type="text"
							className="form-control"
							name="nif"
							value={selectedClient ? selectedClient.nif : ""}
							readOnly
							disabled
						/>
					</div>
				</div>
				<div className="col-md-10">
					<div className="input-group">
						<span className="input-group-text">Dirección</span>
						<input
							type="text"
							className="form-control"
							name="address"
							value={selectedClient ? selectedClient.address : ""}
							readOnly
							disabled
						/>
					</div>
				</div>
				<div className="col-md-2">
					<div className="input-group">
						<span className="input-group-text">C.P.</span>
						<input
							type="text"
							className="form-control"
							name="postalCode"
							value={selectedClient ? selectedClient.postalCode : ""}
							readOnly
							disabled
						/>
					</div>
				</div>
				{/* FIN DATOS CLIENTES */}

				{/* INICIO FORMULARIO FACTURA */}
				<h2 className="mt-4">Datos Factura</h2>
				<div className="col-md-4">
					<label htmlFor="inputBillId" className="form-label">
						Nº Factura
					</label>
					<input type="text" className="form-control" />
				</div>
				<div className="col-md-4">
					<label htmlFor="inputDate" className="form-label">
						Fecha factura
					</label>
					<input
						type="text"
						className="form-control"
						value={new Date().toLocaleString() + ""}
						readOnly
						disabled
					/>
				</div>
				<div className="col-md-4">
					<label htmlFor="inputCode" className="form-label">
						Referencia
					</label>
					<input
						type="text"
						className="form-control"
						name="code"
						value={selectedProduct ? selectedProduct.code : ""}
						readOnly
						disabled
					/>
				</div>

				{/* PRODUCT SELECT */}
				<div className="col-lg-12">
					<label htmlFor="inputProduct" className="form-label">
						Producto
					</label>
					<select
						onChange={e => {
							setSelectedProduct([
								...selectedProduct,
								{
									...products.find(p => p.id.toString() == e.target.value),
									quantity: 1
								}
							]);
							e.target.value = 0;
						}}
						className="form-select mb-3">
						<option value={0} selected>
							Seleccionar producto...
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

				{/* PRODUCTS NAME */}
				<div>
					{selectedProduct.map((product, i) => {
						return (
							<div className="row" key={i}>
								<div className="col-lg-6">
									{i == 0 ? (
										<label htmlFor="nameProducts" className="form-label">
											Nombre del producto
										</label>
									) : null}
									<input
										type="text"
										className="form-control"
										name="nameProduct"
										value={product.name}
										readOnly
										disabled
									/>
								</div>

								{/* PRICE */}
								<div className="col-lg-2">
									<label htmlFor="inputQuantityUnity" className="form-label">
										Precio €/U
									</label>
									<input
										type="number"
										className="form-control"
										name="price"
										value={product.price}
										readOnly
										disabled
									/>
								</div>

								{/* TAX */}
								<div className="col-lg-1 col-sm-4">
									<label htmlFor="inputTax" className="form-label">
										IVA
									</label>
									<input type="text" className="form-control" name="tax" value={21} readOnly />
								</div>

								{/* QUANTITY */}
								<div className="col-lg-1 col-sm-4">
									<label htmlFor="inputQuantity" className="form-label">
										Cantidad
									</label>
									<input
										type="number"
										className="form-control"
										defaultValue={0}
										onChange={e => {
											let quantity = products.find(x => x.id == product.id).quantity;
											if (parseInt(e.target.value) <= quantity && parseInt(e.target.value) > 0) {
												setSelectedProduct(
													selectedProduct.map(x => {
														if (x.id == product.id) {
															return {
																...product,
																quantity: parseInt(e.target.value),
																productPrice:
																	parseInt(e.target.value) *
																	parseInt(product.price) *
																	1.21
															};
														} else {
															return x;
														}
													})
												);
											} else if (parseInt(e.target.value) > quantity) {
												e.target.value = quantity;
												setSelectedProduct(
													selectedProduct.map(x => {
														if (x.id == product.id) {
															return {
																...product,
																quantity: quantity,
																productPrice:
																	parseInt(e.target.value) *
																	parseInt(product.price) *
																	1.21
															};
														} else {
															return x;
														}
													})
												);
											} else if (parseInt(e.target.value) <= 0) {
												e.target.value = 0;
												setSelectedProduct(
													selectedProduct.map(x => {
														if (x.id == product.id) {
															return {
																...product,
																quantity: 0,
																productPrice: 0
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
								<div className="col-lg-2 col-sm-4">
									<label htmlFor="inputPrice" className="form-label">
										Precio €
									</label>
									<div className="d-flex">
										<input type="number" className="form-control" value={product.productPrice} />
										<i
											onClick={() => setSelectedProduct(selectedProduct.filter((x, y) => y != i))}
											className="fas fa-trash-alt fs-1 ms-3 mb-0"
										/>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				<div>{total}</div>

				{/* BUTTON */}
				<div className="col-12 text-center">
					<button type="submit" className="btn btn-primary">
						Generar factura
					</button>
				</div>
			</div>
		</div>
	);
};
export default BillsForm;
