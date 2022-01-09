import React from "react";
import jumbo01 from "../../img/jumbo01.png";
import jumbo02 from "../../img/jumbo02.png";
import jumbo03 from "../../img/jumbo03.png";

const Jumbotron_2 = () => {
	return (
		<div className="row d-flex justify-content-around">
			<div className="col-12 col-md-6 card mb-3 border-0" style={{ width: "18rem" }}>
				<img src={jumbo01} className="card-img-top" alt="..." />
				<div className="card-body">
					<h6 className="card-text">
						Mantenerer el orden de tus proveedores es muy sencillo con el sistema de gestión de Investy.
					</h6>
				</div>
			</div>

			<div className="col-12 col-md-6 card mb-3 border-0" style={{ width: "18rem" }}>
				<img src={jumbo02} className="card-img-top" alt="..." />
				<div className="card-body">
					<h6 className="card-text">Tus productos y clientes todos organizados de la forma más simple.</h6>
				</div>
			</div>

			<div className="col-12 col-md-6 card mb-3 border-0" style={{ width: "18rem" }}>
				<img src={jumbo03} className="card-img-top" alt="..." />
				<div className="card-body">
					<h6 className="card-text">Realiza tus facturas al momento para enviarselas a tus clientes.</h6>
				</div>
			</div>
		</div>
	);
};

export default Jumbotron_2;
