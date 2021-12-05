import React, { useState } from "react";

const Servicios = () => {
	const [show, setShow] = useState(false);

	return (
		<div className="dropdown">
			<a
				href="#"
				className="btn Servicios mx-5 fs-5"
				onMouseOver={() => {
					setShow(!show);
				}}
				onMouseOut={() => {
					setShow(!show);
				}}>
				<span id="span13" />
				<span id="span14" />
				<span id="span15" />
				<span id="span16" />
				Servicios
			</a>

			<ul className={"dropdown-menu " + (show ? "show" : "")} />
		</div>
	);
};

export default Servicios;
