import React, { useState } from "react";

const Client = () => {
	const [data, setData] = useState({});
	const handleInputChange = event => {
		setData({ ...data, [event.target.name]: event.target.value });
	};
	const handleFormSubmit = event => {
		event.preventDefault();
		console.log(data);
	};
	return (
		<div className="container-fluid">
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
						<div className="modal-header">
							<h5 className="modal-title">Creación de un Cliente</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
						</div>
						<div className="modal-body">
							<form onSubmit={handleFormSubmit}>
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
									<label htmlFor="client_postalcode" className="col-sm-2 col-form-label">
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
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
								Cerrar
							</button>
							<button type="button" className="btn btn-primary">
								Crear
							</button>
						</div>
					</div>
				</div>
				v{" "}
			</div>
		</div>
	);
};

export default Client;
