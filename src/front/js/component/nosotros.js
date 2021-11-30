import React, { useState } from "react";

const Nosotros = () => {
	const [show, setShow] = useState(false);

	return (
		<div>
			<div className="dropdown">
				<button
					className="btn btn-primary dropdown-toggle"
					onClick={() => {
						setShow(!show);
					}}>
					Nosotros
				</button>

				<ul className={"dropdown-menu " + (show ? "show" : "")}>
					<li>
						<h1>hola</h1>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Nosotros;
