import React, { useEffect, useState } from "react";

const BillsForm = () => {
	const [clients, setClients] = useState();
	const [products, setProducts] = useState();

	const [selectedClient, setSelectedClient] = useState();
	const [selectedProduct, setSelectedProduct] = useState([]);
	const [rowProducts, setRowProducts] = useState([]);

	useEffect(() => {
		getClients();
		getProducts();
	}, []);

	const getClients = async () => {
		const response = await fetch("https://3001-silver-donkey-kv3s3fuw.ws-eu25.gitpod.io/api/clients");
		const data = await response.json();
		setClients(data.clients);
	};

	const getProducts = async () => {
		const responseProduct = await fetch("https://3001-silver-donkey-kv3s3fuw.ws-eu25.gitpod.io/api/products");
		const dataProduct = await responseProduct.json();
		setProducts(dataProduct.products);
		addRow(dataProduct.products);
	};
	const addRow = products => {
		setRowProducts([
			...rowProducts,
			<div className="row" key={rowProducts.length}>
				<div className="col-lg-6">
					<label htmlFor="inputProduct" className="form-label">
						Producto
					</label>
					<select
						onChange={e =>
							setSelectedProduct([
								...selectedProduct,
								{
									...products.find(p => p.id.toString() == e.target.value),
									quantity: 1
								}
							])
						}
						className="form-select mb-3">
						<option selected>Seleccionar producto...</option>
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
				<div className="col-lg-2">
					<label htmlFor="inputQuantityUnity" className="form-label">
						Precio/u
					</label>
					<input
						type="number"
						className="form-control"
						name="price"
						value={selectedProduct ? selectedProduct.price : ""}
						readOnly
						disabled
					/>
				</div>
				<div className="col-lg-1 col-sm-6">
					<label htmlFor="inputTax" className="form-label">
						Impuestos
					</label>
					<input
						type="text"
						className="form-control"
						name="tax"
						value={selectedProduct ? selectedProduct.tax : ""}
					/>
				</div>
				<div className="col-lg-1 col-sm-6">
					<label htmlFor="inputQuantity" className="form-label">
						Cantidad
					</label>
					<input
						type="number"
						className="form-control"
						defaultValue={1}
						onChange={e => {
							if (e.target.value <= products.find(x => x.id == selectedProduct.id).quantity) {
								setSelectedProduct({ ...selectedProduct, quantity: e.target.value });
							}
						}}
					/>
				</div>
				<div className="col-lg-2">
					<label htmlFor="inputPrice" className="form-label">
						Precio
					</label>
					<input
						type="number"
						className="form-control"
						value={selectedProduct ? selectedProduct.price * selectedProduct.quantity : ""}
					/>
				</div>
			</div>
		]);
	};

	return (
		<div className="container">
			<div className="row g-3">
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

			<form className="row g-3">
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

				{/* FORMULARIO FACTURA */}
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

				{/* form productos */}
				<div>{rowProducts}</div>
				<div className="col-12 d-flex justify-content-between">
					<button
						className="btn btn-secondary"
						onClick={e => {
							e.preventDefault();
							addRow(products);
						}}>
						Añadir producto
					</button>
					<button type="submit" className="btn btn-primary">
						Generar factura
					</button>
				</div>
			</form>
		</div>
	);
};
export default BillsForm;
