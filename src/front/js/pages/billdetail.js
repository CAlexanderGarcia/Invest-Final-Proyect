import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Footer from "../component/footer";
import { useParams } from "react-router-dom";

const BillDetail = () => {
	const { store, actions } = useContext(Context);
	const [data, setData] = useState();
	let id = useParams().id;

	useEffect(() => {
		actions.detailBill(id).then(res => {
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
						<hr className="bluedark-investy m-0" />
					</div>

					<div className="col-md-12">
						<div className="input-group">
							<span className="input-group-text bg-bluedark-investy text-white border-bluedark">
								Nombre
							</span>
							<input
								type="text"
								className="form-control border-bluedark"
								value={data.user.surname}
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
								value={data.user.address}
								readOnly
								disabled
							/>
						</div>
					</div>
					<div className="col-md-4">
						<div className="input-group">
							<span className="input-group-text bg-bluedark-investy text-white border-bluedark">
								Compañía
							</span>
							<input
								type="text"
								className="form-control border-bluedark"
								value={data.user.company}
								readOnly
								disabled
							/>
						</div>
					</div>
					<div className="col-md-2">
						<div className="input-group">
							<span className="input-group-text bg-bluedark-investy text-white border-bluedark">
								Código Postal
							</span>
							<input
								type="text"
								className="form-control border-bluedark"
								value={data.user.postalCode}
								readOnly
								disabled
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="input-group">
							<span className="input-group-text bg-bluedark-investy text-white border-bluedark">
								Email
							</span>
							<input
								type="email"
								className="form-control border-bluedark"
								value={data.user.email}
								readOnly
								disabled
							/>
						</div>
					</div>
					<div className="col-md-4">
						<div className="input-group">
							<span className="input-group-text bg-bluedark-investy text-white border-bluedark">
								Numero de Documento
							</span>
							<input
								type="text"
								className="form-control border-bluedark"
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
					<hr className="bluedark-investy m-0 mb-3" />
				</div>

				<div className="row g-3">
					<div className="col-md-9">
						<div className="input-group">
							<span className="input-group-text bg-bluedark-investy text-white border-bluedark">
								Nombre
							</span>
							<input
								type="text"
								className="form-control border-bluedark"
								name="name"
								value={data.client.name}
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
								value={data.client.nif}
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
								value={data.client.address}
								readOnly
								disabled
							/>
						</div>
					</div>
					<div className="col-md-2">
						<div className="input-group">
							<span className="input-group-text bg-bluedark-investy text-white border-bluedark">
								C.P.
							</span>
							<input
								type="text"
								className="form-control border-bluedark"
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
							<hr className="bluedark-investy m-0" />
						</div>
						<div className="col-md-6">
							<div className="input-group">
								<span className="input-group-text bg-bluedark-investy text-white border-bluedark">
									Número de Factura
								</span>
								<input
									type="text"
									className="form-control border-bluedark"
									readOnly
									disabled
									value={data.bill.number}
								/>
							</div>
						</div>
						<div className="col-md-6">
							<div className="input-group">
								<span className="input-group-text bg-bluedark-investy text-white border-bluedark">
									Fecha de Factura
								</span>
								<input
									type="text"
									className="form-control border-bluedark"
									readOnly
									disabled
									value={data.bill.date}
								/>
							</div>
						</div>
						<div className="col-md-12">
							<table className="container">
								<thead>
									<tr>
										<th className="text-center bluedark-investy border-bluedark">
											Nombre del Producto
										</th>
										<th className="text-center bluedark-investy border-bluedark">
											Precio Unitario
										</th>
										<th className="text-center bluedark-investy border-bluedark">IVA</th>
										<th className="text-center bluedark-investy border-bluedark">Cantidad</th>
										<th className="text-center bluedark-investy border-bluedark">Subtotal</th>
									</tr>
								</thead>
								{data.products.map((value, index) => {
									return (
										<tbody key={index}>
											<tr>
												<td className="text-center border-bluedark">{value.product.name}</td>
												<td className="text-center border-bluedark">{value.product.price}</td>
												<td className="text-center border-bluedark">21%</td>
												<td className="text-center border-bluedark">{value.quantity}</td>
												<td className="text-center border-bluedark">
													{(value.price * value.quantity * 1.21).toFixed(2)}
												</td>
											</tr>
										</tbody>
									);
								})}
							</table>
						</div>

						<div className="col-md-3 offset-9">
							<div className="input-group">
								<span className="input-group-text total-red border-bluedark">TOTAL €</span>
								<input
									type="text"
									className="form-control fw-bold text-center border-bluedark"
									value={data.bill.total.toFixed(2)}
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
