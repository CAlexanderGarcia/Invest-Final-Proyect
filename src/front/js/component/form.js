import React from "react";

const Form = () => {
	return (
		<form className="row g-3">
			<div className="row g-3">
				<div className="col">
					<label htmlFor="name" className="form-label">
						Nombre
					</label>
					<input type="text" className="form-control" placeholder="Nombre" aria-label="First name" />
				</div>
				<div className="col">
					<label htmlFor="lastName" className="form-label">
						{" "}
						Apellidos{" "}
					</label>
					<input type="text" className="form-control" placeholder="Apellidos" aria-label="Last name" />
				</div>
			</div>
			<div className="col-md-6">
				<label htmlFor="inputEmail4" className="form-label">
					Email
				</label>
				<input type="email" className="form-control" id="inputEmail4" />
			</div>
			<div className="col-6">
				<label htmlFor="inputAddress" className="form-label">
					Dirección de la empresa
				</label>
				<input type="text" className="form-control" id="inputAddress" placeholder="Calle Pepito Perez, 12" />
			</div>
			<div className="col-md-6">
				<label htmlFor="inputCompany" className="form-label">
					Razón Social
				</label>
				<input type="text" className="form-control" id="inputCompany" />
			</div>
			<div className="col-md-6">
				<label htmlFor="specificSizeInputDocNumber" className="form-label">
					Numero de identificación
				</label>
				<input type="text" className="form-control" id="specificSizeInputDocNumber" />
			</div>
			<div className="col-md-4">
				<label htmlFor="inputState" className="form-label">
					Tipo de documentación
				</label>
				<select id="inputState" className="form-select">
					<option selected>Seleccione...</option>
					<option>DNI</option>
					<option>NIE</option>
					<option>NIF</option>
				</select>
			</div>
			<div className="col-md-2">
				<label htmlFor="inputZip" className="form-label">
					Código Postal
				</label>
				<input type="text" className="form-control" id="inputZip" />
			</div>
			<div className="col-md-6">
				<label htmlFor="inputPassword4" className="form-label">
					Password
				</label>
				<input type="password" className="form-control" id="inputPassword4" />
			</div>
			<div className="col-12">
				<button type="submit" className="btn btn-primary">
					Registrarse
				</button>
			</div>
		</form>
	);
};

export default Form;
