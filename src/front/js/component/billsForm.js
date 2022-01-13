import React, { useEffect, useState } from "react";

const BillsForm = () => {
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
		const response = await fetch("https://3001-silver-donkey-kv3s3fuw.ws-eu27.gitpod.io/api/clients");
		const data = await response.json();
		setClients(data.clients);
	};

	const getProducts = async () => {
		const responseProduct = await fetch("https://3001-silver-donkey-kv3s3fuw.ws-eu27.gitpod.io/api/products");
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
				<div className="p-0 mt-5">
					<h2 className="">Datos personales</h2>
					<hr className="text-success m-0" />
				</div>
				<div className="col-md-6">
					<div className="input-group">
						<span className="input-group-text bg-dark text-white">Nombre</span>
						<input type="text" className="form-control" value="Fredy" readOnly disabled />
					</div>
				</div>
				<div className="col-md-6">
					<div className="input-group">
						<span className="input-group-text bg-dark text-white">Apellidos</span>
						<input type="text" className="form-control" value="Moreno" readOnly disabled />
					</div>
				</div>
				<div className="col-md-8">
					<div className="input-group">
						<span className="input-group-text bg-dark text-white">Dirección</span>
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
						<span className="input-group-text bg-dark text-white">Compañia</span>
						<input type="text" className="form-control" value="Coca-Cola" readOnly disabled />
					</div>
				</div>
				<div className="col-md-2">
					<div className="input-group">
						<span className="input-group-text bg-dark text-white">C.P.</span>
						<input type="text" className="form-control" value="12345" readOnly disabled />
					</div>
				</div>
				<div className="col-md-8">
					<div className="input-group">
						<span className="input-group-text bg-dark text-white">Email</span>
						<input type="email" className="form-control" value="info@fredymoreno.es" readOnly disabled />
					</div>
				</div>
				<div className="col-md-2">
					<div className="input-group">
						<span className="input-group-text bg-dark text-white">DNI</span>
						<input type="text" className="form-control" value="1234567" readOnly disabled />
					</div>
				</div>
			</div>
			{/* FIN DATOS PERSONALES */}

			{/* INICIO DATOS CLIENTES */}
			<div className="p-0 mt-5">
				<h2 className="">Datos de cliente</h2>
				<hr className="text-success m-0" />
			</div>
			<div className="col-12 pt-0 mt-2">
				<label htmlFor="inputState" className="form-label my-0">
					Lista de clientes
					<i className="fas fa-plus ms-2 text-success" />
				</label>
				<select
					onChange={e => setSelectedClient(clients.find(x => x.id.toString() == e.target.value))}
					id="inputState"
					className="form-select mb-3 border border-success">
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
						<span className="input-group-text bg-dark text-white">Nombre</span>
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
						<span className="input-group-text bg-dark text-white">NIF</span>
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
						<span className="input-group-text bg-dark text-white">Dirección</span>
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
						<span className="input-group-text bg-dark text-white">C.P.</span>
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
				<div className="p-0 mt-5">
					<h2 className="">Datos de factura</h2>
					<hr className="text-success m-0" />
				</div>
				{/* PRODUCT SELECT */}
				<div className="col-md-4 pt-0 mt-2">
					<label htmlFor="inputProduct" className="form-label my-0">
						Lista de productos
						<i className="fas fa-plus ms-2 text-success" />
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
						<i className="fas fa-file-invoice ms-2 text-success" />
					</label>
					<input type="text" className="form-control" />
				</div>
				<div className="col-md-4 pt-0 mt-2">
					<label htmlFor="inputDate" className="form-label my-0">
						Fecha factura
						<i className="fas fa-calendar-alt ms-2 text-success" />
					</label>
					<input
						type="text"
						className="form-control"
						value={new Date().toLocaleString() + ""}
						readOnly
						disabled
					/>
				</div>

				{/* PRODUCTS NAME */}
				<div>
					{selectedProduct.map((product, i) => {
						return (
							<div className="row mb-2" key={i}>
								<div className="col-lg-2">
									{i == 0 ? (
										<label htmlFor="inputCode" className="form-label text-center">
											Referencia
										</label>
									) : null}
									<input
										type="text"
										className="form-control"
										name="code"
										value={product.code}
										readOnly
										disabled
									/>
								</div>
								<div className="col-lg-5">
									{i == 0 ? (
										<label htmlFor="nameProducts" className="form-label text-center">
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
								<div className="col-lg-1">
									{i == 0 ? (
										<label htmlFor="inputQuantityUnity" className="form-label text-center">
											P.U.
										</label>
									) : null}
									<input
										type="number"
										className="form-control text-end"
										name="price"
										value={product.price}
										readOnly
										disabled
									/>
								</div>

								{/* TAX */}
								<div className="col-lg-1 col-sm-4">
									{i == 0 ? (
										<label htmlFor="inputTax" className="form-label text-center">
											IVA
										</label>
									) : null}
									<input
										type="text"
										className="form-control text-end"
										name="tax"
										value={21}
										readOnly
									/>
								</div>

								{/* QUANTITY */}
								<div className="col-lg-1 col-sm-4">
									{i == 0 ? (
										<label htmlFor="inputQuantity" className="form-label text-end">
											Cantidad
										</label>
									) : null}
									<input
										type="number"
										className="form-control text-end"
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
									{i == 0 ? (
										<label htmlFor="inputPrice" className="form-label text-center">
											Precio €
										</label>
									) : null}
									<div className="d-flex">
										<input
											type="number"
											className="form-control text-end"
											value={product.productPrice}
										/>
										<i
											onClick={() => setSelectedProduct(selectedProduct.filter((x, y) => y != i))}
											className="fas fa-trash-alt fs-1 ms-3 mb-0 text-danger"
										/>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				<div className="col-3 offset-9 text-end mt-5">
					<div className="input-group">
						<span className="input-group-text fw-bold">Total €</span>
						<input type="number" className="form-control text-end fw-bold" readOnly value={total} />
					</div>
				</div>

				{/* BUTTON */}
				<div className="col-12 text-end">
					<button type="submit" className="btn btn-success">
						Generar factura
					</button>
				</div>
			</div>
		</div>
	);
};
export default BillsForm;
