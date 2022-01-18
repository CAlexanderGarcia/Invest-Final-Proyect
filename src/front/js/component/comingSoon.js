import React from "react";
import grafica from "../../img/grafica.jpeg";

const ComingSoon = () => {
	return (
		<div className="container">
			<h2 className="featurette-heading bluedark-investy">Muy pronto disponible</h2>
			<hr className="bluedark-investy" />
			<p>Creación de reportes gráficos en tiempo real para un mayor control sobre tu empresa.</p>
			<img src={grafica} className="col-12 img-fluid justify-content-center" />
		</div>
	);
};

export default ComingSoon;
