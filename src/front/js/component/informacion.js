import React, { useState } from "react";

const Informacion = () => {
	const [show, setShow] = useState(false);

	return (
		<div className="dropdown">
			<a
				className="btn buttom-nsi mx-5 fs-5 text-white"
				href="#"
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
				Información
			</a>

			<ul className={"dropdown-menu " + (show ? "show" : "")} />
		</div>
	);
};

export default Informacion;
