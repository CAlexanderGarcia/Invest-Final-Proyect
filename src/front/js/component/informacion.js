import React, { useState } from "react";

const Informacion = () => {
	const [show, setShow] = useState(false);

	return (
		<div className="dropdown">
			<a
				className="btn Informacion mx-5 fs-5"
				href="#"
				onMouseOver={() => {
					setShow(!show);
				}}
				onMouseOut={() => {
					setShow(!show);
				}}>
				<span id="span17" />
				<span id="span18" />
				<span id="span19" />
				<span id="span20" />
				Información
			</a>

			<ul className={"dropdown-menu " + (show ? "show" : "")} />
		</div>
	);
};

export default Informacion;
