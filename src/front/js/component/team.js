import React from "react";
import fredy from "../../img/fredy.png";
import juan from "../../img/juan.png";
import alex from "../../img/alex.png";

const Team = () => {
	return (
		<div className="container marketing my-5" id="nosotros-link">
			<h2 className="featurette-heading bluedark-investy">Nuestro equipo</h2>
			<hr className="bluedark-investy mb-5" />
			<div className="row text-center">
				<div className="col-lg-4">
					<img src={alex} className="bd-placeholder-img rounded-circle" width="140" height="140" role="img" />

					<h2 className="bluedark-investy">Alexander García</h2>
					<p>Búsqueda en la vida, sensaciones por la música, aventura en la programación.</p>
				</div>
				<div className="col-lg-4">
					<img
						src={fredy}
						className="bd-placeholder-img rounded-circle"
						width="140"
						height="140"
						role="img"
					/>

					<h2 className="bluedark-investy">Fredy Moreno</h2>
					<p>DJ de vocación, informático de profesión y freak por afición</p>
				</div>
				<div className="col-lg-4">
					<img src={juan} className="bd-placeholder-img rounded-circle" width="140" height="140" role="img" />

					<h2 className="bluedark-investy">Juan David Escobar</h2>
					<p>Con gusto por la lectura, la musica y la programacion...</p>
				</div>
			</div>
		</div>
	);
};
export default Team;
