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
		<div className="container">
			<form onSubmit={handleFormSubmit}>
				<div className="mb-3">
					<label htmlFor="client_name" className="form-label">
						Nombre
					</label>
					<input
						type="text"
						className="form-control"
						id="client_name"
						name="name"
						onChange={handleInputChange}
						min="3"
						max="30"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="client_nif" className="form-label">
						NIF
					</label>
					<input
						type="text"
						className="form-control"
						id="client_nif"
						name="nif"
						onChange={handleInputChange}
						min="9"
						max="13"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="client_address" className="form-label">
						Dirección
					</label>
					<input
						type="text"
						className="form-control"
						id="client_address"
						name="address"
						onChange={handleInputChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="client_postal_code" className="form-label">
						Código Postal
					</label>
					<input
						type="number"
						className="form-control"
						id="client_postal_code"
						name="postal_code"
						onChange={handleInputChange}
						max="4"
					/>
				</div>

				<button type="submit" className="btn btn-primary">
					Crear Cliente
				</button>
			</form>
		</div>
	);
};

export default Client;
