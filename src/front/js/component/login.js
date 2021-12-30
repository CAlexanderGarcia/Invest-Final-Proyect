import React, { useState } from "react";
import Modal from "../component/modal.js";

const Login = () => {
	const [show, setShow] = useState(false);
	

	return (
		<div>
			<a
				className="btn fs-5 mx-5 buttom-nsi"
				onClick={() => {
					setShow(!show);
				}}>
				<span id="span5" />
				<span id="span6" />
				<span id="span7" />
				<span id="span8" />
				<i class="fas fa-user-alt"></i>
			</a>

			<ul>
				<li>
					<Modal />
				</li>
			</ul>
		</div>
	);
};

export default Login;
