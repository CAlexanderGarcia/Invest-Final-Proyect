import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

const BillDetail = () => {
	const { store, actions } = useContext(Context);
	const [data, setData] = useState();

	useEffect(() => {
		actions.detailBill(1).then(res => {
			setData(res.data);
		});
	}, []);

	return data ? (
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
						<input type="text" className="form-control" readOnly disabled />
					</div>
				</div>
				<div className="col-md-6">
					<div className="input-group">
						<span className="input-group-text bg-dark text-white">Apellido</span>
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
						<input type="text" className="form-control" value={data.user.postalCode} readOnly disabled />
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
				<h2 className="">Datos de cliente</h2>
				<hr className="text-success m-0" />
			</div>
			<div className="col-12 pt-0 mt-2 ">
				<span className="input-group-text bg-dark text-white" />
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
				<div className="p-0 mt-5">
					<h2 className="">Datos de factura</h2>
					<hr className="text-success m-0" />
				</div>
				{/* PRODUCT SELECT */}
				<div className="col-md-4 pt-0 mt-2">
					<span className="input-group-text bg-dark text-white">Nombre</span>
					<input readOnly disabled />
				</div>
				<div className="col-md-4 pt-0 mt-2">
					<label htmlFor="inputBillId" className="form-label my-0">
						Nº Factura
						<i className="fas fa-file-invoice ms-2 text-success" />
					</label>
					<input type="text" className="form-control" readOnly disabled />
				</div>
				<div className="col-md-4 pt-0 mt-2">
					<label htmlFor="inputDate" className="form-label my-0">
						Fecha factura
						<i className="fas fa-calendar-alt ms-2 text-success" />
					</label>
					<input type="text" className="form-control" readOnly disabled />
				</div>

				{/* PRODUCTS NAME */}
				<div>
					<div className="row mb-2">
						<div className="col-lg-2">
							<input type="text" className="form-control" name="code" readOnly disabled />
						</div>
						<div className="col-lg-5">
							<input type="text" className="form-control" name="nameProduct" readOnly disabled />
						</div>

						{/* PRICE */}
						<div className="col-lg-1">
							<label htmlFor="inputQuantityUnity" className="form-label text-center">
								P.U.
							</label>

							<input type="number" className="form-control text-end" name="price" readOnly disabled />
						</div>

						{/* TAX */}
						<div className="col-lg-1 col-sm-4">
							<label htmlFor="inputTax" className="form-label text-center">
								IVA
							</label>

							<input type="text" className="form-control text-end" name="tax" readOnly disabled />
						</div>

						{/* QUANTITY */}
						<div className="col-lg-1 col-sm-4">
							<label htmlFor="inputQuantity" className="form-label text-end">
								Cantidad
							</label>

							<input type="number" className="form-control text-end" readOnly disabled />
						</div>
					</div>
				</div>

				<div className="col-3 offset-9 text-end mt-5">
					<div className="input-group">
						<span className="input-group-text fw-bold">Total €</span>
						<input type="number" className="form-control text-end fw-bold" readOnly disabled />
					</div>
				</div>
			</div>
		</div>
	) : (
		<h1>Cargando...</h1>
	);
};

export default BillDetail;
