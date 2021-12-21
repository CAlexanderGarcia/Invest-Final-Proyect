import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import List from "../component/list;

const Client = () => {
	const { actions } = useContext(Context);
	const [data, setData] = useState({});
	const [showMessage, setShowMessage] = useState({});
	const handleInputChange = event => {
		setData({
			...data,
			[event.target.name]: event.target.value
		});
	};
	const handleFormSubmit = event => {
		event.preventDefault();
		setShowMessage({});
		actions
			.createClient(data)
			.then(result => {
				setShowMessage({ error: false, message: "El cliente fue creado" });
			})
			.catch(err => {
				setShowMessage({ error: true, message: "El cliente no se pudo crear" });
			});
	};

	return (
		<nav className="container-fluid navbar navbar-light bg-light">
			<div className="">
				<button type="button" className="btn Modal fs-5" data-bs-toggle="modal" data-bs-target="#clientModal">
					<span id="span5" />
					<span id="span6" />
					<span id="span7" />
					<span id="span8" />
					Crea un Cliente
				</button>
				<div className="modal fade" tabIndex="-1" id="clientModal">
					<div className="modal-dialog">
						<div className="modal-content">
							<form onSubmit={handleFormSubmit}>
								<div className="modal-header">
									<h5 className="modal-title">Creación de un Cliente</h5>
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
										<label htmlFor="client_name" className="col-sm-2 col-form-label">
											Nombre
										</label>
										<input
											id="client_name"
											type="text"
											className="input col-sm-10"
											name="client_name"
											onChange={handleInputChange}
										/>
									</div>

									<div className="m-3 p-2">
										<label htmlFor="client_nif" className="col-sm-2 col-form-label">
											NIF
										</label>
										<input
											id="client_nif"
											type="text"
											className="input col-sm-10"
											name="client_nif"
											data-type="text"
											onChange={handleInputChange}
										/>
									</div>
									<div className="m-3 p-2">
										<label htmlFor="client_address" className="col-sm-2 col-form-label">
											Dirección
										</label>
										<input
											id="client_address"
											type="text"
											className="input col-sm-10"
											name="client_address"
											data-type="text"
											onChange={handleInputChange}
										/>
									</div>
									<div className="m-3 p-2">
										<label htmlFor="client_postalcode" className="col-2 col-form-label">
											Código Postal
										</label>
										<input
											id="client_postalcode"
											type="number"
											className="input col-sm-10"
											name="client_postalcode"
											data-type="number"
											onChange={handleInputChange}
										/>
									</div>
								</div>
								<div className="modal-footer">
									<button type="submit" className="btn btn-primary">
										Crear
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<form className="form d-flex justify-content-between ">
				<input className="form-control" type="search" placeholder="Buscar Cliente" aria-label="Search" />
				<button type="submit" className="btn Modal fs-5" data-bs-toggle="modal">
					<span id="span5" />
					<span id="span6" />
					<span id="span7" />
					<span id="span8" />
					Search
				</button>
			</form>
			<List />
		</nav>
	);
};

export default Client;
