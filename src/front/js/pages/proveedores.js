import React from "react";

export const Proveedores = () => {
	return (
		<div className="card container d-flex w-100">
			<div className="card-body">
				<a href="#" className="btn btn-success">
					Dar de alta
				</a>
				<div className="input-group">
					<input
						type="text"
						className="form-control"
						placeholder="Buscar proveedor"
						aria-describedby="button-addon2"
					/>
					<div className="input-group-append">
						<button className="btn btn-outline-success" type="button" id="button-addon2">
							Buscar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
