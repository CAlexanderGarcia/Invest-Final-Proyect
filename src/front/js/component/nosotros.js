import React, { useState } from "react";

const Nosotros = () => {
	const [show, setShow] = useState(false);

	return (
		<div className="dropdown">
			<a
				href="#"
				className="btn buttom-nsi fs-5 mx-5 text-white"
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
				Nosotros
			</a>

			<ul className={"dropdown-menu " + (show ? "show" : "")} />
		</div>
	);
};

export default Nosotros;
