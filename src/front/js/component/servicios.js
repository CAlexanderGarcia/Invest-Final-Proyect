import React, { useState } from "react";

const Servicios = () => {
	const [show, setShow] = useState(false);

	return (
		<div className="dropdown">
			<a
				href="#"
				className="btn buttom-nsi mx-5 fs-5"
				onMouseOver={() => {
					setShow(!show);
				}}
				onMouseOut={() => {
					setShow(!show);
				}}>
				<span id="span9" />
				<span id="span10" />
				<span id="span11" />
				<span id="span12" />
				Servicios
			</a>

			<ul className={"dropdown-menu " + (show ? "show" : "")} />
		</div>
	);
};

export default Servicios;
