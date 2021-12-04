import React, { useState } from "react";

const Resgistrese = () => {
	const [show, setShow] = useState(false);

	return (
		<div className="dropdown ">
			<a
				className="btn Registrese fs-5"
				onClick={() => {
					setShow(!show);
				}}>
				<span id="span1" />
				<span id="span2" />
				<span id="span3" />
				<span id="span4" />
				Regístrese
			</a>

			<ul className={"dropdown-menu " + (show ? "show" : "")}>
				<li />
			</ul>
		</div>
	);
};

export default Resgistrese;
