import React from "react";

const BillsForm = () => {
	return (
		<div className="container">
			<div className="row g-3">
				<h2>Datos personales</h2>
				<div className="col-md-6">
					<div className="input-group">
						<span className="input-group-text">Nombre</span>
						<input type="text" className="form-control" id="inputEmail4" value="Fredy" readOnly disabled />
					</div>
				</div>
				<div className="col-md-6">
					<div className="input-group">
						<span className="input-group-text">Apellidos</span>
						<input
							type="text"
							className="form-control"
							id="inputPassword4"
							value="Moreno"
							readOnly
							disabled
						/>
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
						<input type="text" className="form-control" id="inputZip" value="12345" readOnly disabled />
					</div>
				</div>
				<div className="col-md-8">
					<div className="input-group">
						<span className="input-group-text">Email</span>
						<input
							type="email"
							className="form-control"
							id="inputCity"
							value="info@fredymoreno.es"
							readOnly
							disabled
						/>
					</div>
				</div>
				<div className="col-md-2">
					<div className="input-group">
						<span className="input-group-text">DNI</span>
						<input type="text" className="form-control" id="inputZip" value="1234567" readOnly disabled />
					</div>
				</div>
			</div>

			<h2 className="mt-4">Datos Cliente</h2>
			<div className="col-12">
				<label htmlFor="inputState" className="form-label">
					Lista de clientes
				</label>
				<select id="inputState" className="form-select mb-3">
					<option selected>Seleccionar cliente...</option>
					<option>...</option>
				</select>
			</div>

			{/* FORMULARIO FACTURA */}
			<form className="row g-3">
				<div className="col-md-9">
					<div className="input-group">
						<span className="input-group-text">Nombre</span>
						<input type="text" className="form-control" value="" readOnly disabled />
					</div>
				</div>
				<div className="col-md-3">
					<div className="input-group">
						<span className="input-group-text">NIF</span>
						<input type="text" className="form-control" value="" readOnly disabled />
					</div>
				</div>
				<div className="col-md-10">
					<div className="input-group">
						<span className="input-group-text">Dirección</span>
						<input type="text" className="form-control" value="" readOnly disabled />
					</div>
				</div>
				<div className="col-md-2">
					<div className="input-group">
						<span className="input-group-text">C.P.</span>
						<input type="text" className="form-control" value="" readOnly disabled />
					</div>
				</div>

				<h2 className="mt-4">Datos Factura</h2>
				<div className="col-md-6">
					<label htmlFor="inputCity" className="form-label">
						Nº Factura
					</label>
					<input type="text" className="form-control" id="inputCity" />
				</div>
				<div className="col-md-4">
					<label htmlFor="inputState" className="form-label">
						Fecha
					</label>
					<input type="text" className="form-control" id="inputDate" />
				</div>
				<div className="col-md-2">
					<label htmlFor="inputZip" className="form-label">
						Impuestos
					</label>
					<input type="text" className="form-control" id="inputZip" />
				</div>
				<div className="col-md-2">
					<label htmlFor="inputZip" className="form-label">
						Referencia
					</label>
					<input type="text" className="form-control" id="inputZip" />
				</div>
				<div className="col-md-7">
					<label htmlFor="inputAddress" className="form-label">
						Producto
					</label>
					<input type="text" className="form-control" id="inputAddress" />
				</div>
				<div className="col-md-1">
					<label htmlFor="inputState" className="form-label">
						Cantidad
					</label>
					<input type="text" className="form-control" id="inputDate" />
				</div>
				<div className="col-md-2">
					<label htmlFor="inputZip" className="form-label">
						Precio
					</label>
					<input type="text" className="form-control" id="inputZip" />
				</div>

				<div className="col-12 d-flex justify-content-between">
					<button className="btn btn-secondary">Añadir producto</button>
					<button type="submit" className="btn btn-primary">
						Generar factura
					</button>
				</div>
			</form>
		</div>
	);
};
export default BillsForm;
