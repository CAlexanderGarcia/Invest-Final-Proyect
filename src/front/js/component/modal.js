import React, { useState } from "react";

const Modal = props => {
	const [show, setShow] = useState(false);

	return (
		<div>
			<button
				type="button"
				className="btn Modal fs-5"
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
				onClick={() => {
					setShow(!show);
				}}>
				<span id="span5" />
				<span id="span6" />
				<span id="span7" />
				<span id="span8" />
				Login
			</button>
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog login-wrap">
					<div className="modal-content login-html ">
						<div className="modal-header">
							<label htmlFor="tab-1" className="tab text-center text-white">
								Sign In
							</label>

							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
						</div>

						<div className="modal-body" />

						<form className="login-form">
							<div className="group">
								<label htmlFor="user" className="label">
									Username
								</label>
								<input id="user" type="text" className="input" />
							</div>

							<div className="group">
								<label htmlFor="pass" className="label">
									Password
								</label>
								<input id="pass" type="password" className="input" data-type="password" />
							</div>

							<div className="group">
								<input id="check" type="checkbox" className="check" checked />
								<label htmlFor="check">
									<span className="icon" /> Keep me Signed in
								</label>
							</div>
							<div className="group">
								<input type="submit" className="button" value="Sign In" />
							</div>
						</form>

						<div className="modal-footer foot-lnk">
							<a href="#forgot">Forgot Password?</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
