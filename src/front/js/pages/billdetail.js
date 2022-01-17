import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Footer from "../component/footer";

const BillDetail = () => {
	const { store, actions } = useContext(Context);
	const [data, setData] = useState();

	useEffect(() => {
		actions.detailBill(1).then(res => {
			setData(res.data);
		});
	}, []);

	return data ? (
		<div>
			<div className="container">
				<div className="row g-3">
					{/* DATOS PERSONALES */}
					<div className="p-0 mt-5">
						<h2 className="">Datos personales</h2>
						<hr className="text-success m-0" />
					</div>

					<div className="col-md-12">
						<div className="input-group">
							<span className="input-group-text bg-dark text-white">Nombre</span>
							<input type="text" className="form-control" value={data.user.surname} readOnly disabled />
						</div>
					</div>
					<div className="col-md-8">
						<div className="input-group">
							<span className="input-group-text bg-dark text-white">Dirección</span>
							<input type="text" className="form-control" value={data.user.address} readOnly disabled />
						</div>
					</div>
					<div className="col-md-4">
						<div className="input-group">
							<span className="input-group-text bg-dark text-white">Compañía</span>
							<input type="text" className="form-control" value={data.user.company} readOnly disabled />
						</div>
					</div>
					<div className="col-md-2">
						<div className="input-group">
							<span className="input-group-text bg-dark text-white">Código Postal</span>
							<input
								type="text"
								className="form-control"
								value={data.user.postalCode}
								readOnly
								disabled
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="input-group">
							<span className="input-group-text bg-dark text-white">Email</span>
							<input type="email" className="form-control" value={data.user.email} readOnly disabled />
						</div>
					</div>
					<div className="col-md-4">
						<div className="input-group">
							<span className="input-group-text bg-dark text-white">Numero de Documento</span>
							<input
								type="text"
								className="form-control"
								value={data.user.numberDocumentation}
								readOnly
								disabled
							/>
						</div>
					</div>
				</div>
				{/* FIN DATOS PERSONALES */}

				{/* INICIO DATOS CLIENTES */}
				<div className="p-0 mt-5">
					<h2 className="mt-5">Datos de cliente</h2>
					<hr className="text-success m-0 mb-3" />
				</div>

				<div className="row g-3">
					<div className="col-md-9">
						<div className="input-group">
							<span className="input-group-text bg-dark text-white">Nombre</span>
							<input
								type="text"
								className="form-control"
								name="name"
								value={data.client.name}
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
								value={data.client.nif}
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
								value={data.client.address}
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
								value={data.client.postalCode}
								readOnly
								disabled
							/>
						</div>
					</div>
					{/* FIN DATOS CLIENTES */}

					{/* INICIO FORMULARIO FACTURA */}
					<div className="row g-3">
						{/* DATOS PERSONALES */}
						<div className="p-0 mt-5">
							<h2 className="">Datos de factura</h2>
							<hr className="text-success m-0" />
						</div>
						<div className="col-md-8">
							<div className="input-group">
								<span className="input-group-text bg-dark text-white">Número de Factura</span>
								<input
									type="text"
									className="form-control"
									readOnly
									disabled
									value={data.bill.number}
								/>
							</div>
						</div>
						<div className="col-md-4">
							<div className="input-group">
								<span className="input-group-text bg-dark text-white">Fecha de Factura</span>
								<input type="text" className="form-control" readOnly disabled value={data.bill.date} />
							</div>
						</div>
						<div className="col-md-12 ">
							<table className="container">
								<tr>
									<th>Nombre del Producto</th>
									<th>Precio Unitario</th>
									<th>IVA</th>
									<th>Cantidad</th>
									<th>Precio Total</th>
								</tr>
								{data.products.map((value, index) => {
									return (
										<tr key={index}>
											<td>{value.product.name}</td>
											<td>{value.product.price}</td>
											<td>{value.product.tax}</td>
											<td>{value.quantity}</td>
											<td>{value.price}</td>
										</tr>
									);
								})}
							</table>
						</div>

						<div className="col-md-8">
							<div className="input-group">
								<span className="input-group-text bg-danger text-white">TOTAL</span>
								<input
									type="text"
									className="form-control fw-bold"
									value={data.bill.total}
									readOnly
									disabled
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	) : (
		<div>
			<h1>Cargando...</h1>
			<Footer />
		</div>
	);
};

export default BillDetail;
