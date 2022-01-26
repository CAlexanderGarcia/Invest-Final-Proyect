import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

const ModalLogin = () => {
	const { store, actions } = useContext(Context);
	const [data, setData] = useState({});
	const [error, setError] = useState("");
	const history = useHistory();
	const handleInputChange = event => {
		setData({ ...data, [event.target.name]: event.target.value });
	};
	const handleOnSubmit = event => {
		event.preventDefault();
		const response = actions.login(data).then(res => {
			if (res) {
				document.querySelector(".btn-close").click();
				history.push("/client");
			} else {
				setError("Email o Password Incorrectos, Inténtelo de Nuevo");
			}
		});
	};

	return (
		<div>
			<button
				type="button"
				className="btn buttom-nsi btn-login-contrast fw-bold"
				data-bs-toggle="modal"
				data-bs-target="#modalLogin">
				<span id="span5" />
				<span id="span6" />
				<span id="span7" />
				<span id="span8" />
				Login
			</button>
			<div
				className="modal fade"
				id="modalLogin"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content modalCSP p-4">
						<div className="modal-header">
							<h5 className="modal-title text-white">Login</h5>

							<button
								type="button"
								className="btn-close btn-close-white"
								data-bs-dismiss="modal"
								aria-label="Close"
							/>
						</div>

						<form onSubmit={handleOnSubmit}>
							<div className="modal-body">
								{error ? (
									<div className={`alert alert-danger`} role="alert">
										{error}
									</div>
								) : (
									""
								)}
								<div className="mb-3">
									<label htmlFor="user" className="form-label text-white">
										Email
									</label>
									<input
										type="email"
										name="email"
										className="form-control input-focus"
										id="user"
										onChange={handleInputChange}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="pass" className="form-label text-white">
										Password
									</label>
									<input
										type="password"
										className="form-control input-focus"
										id="pass"
										data-type="password"
										name="password"
										onChange={handleInputChange}
									/>
								</div>
							</div>
							<div className="modal-footer justify-content-center">
								<button type="submit" className="mt-4 btn btn-lg btn-formCreate w-50">
									LOGIN
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalLogin;
