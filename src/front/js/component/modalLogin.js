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
				className="btn fs-5 buttom-nsi bluelight-investy btn-login-contrast"
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
					<div className="modal-content  bg-bluedark-investy p-4">
						<div className="modal-header">
							<label htmlFor="tab-1" className="tab text-center text-white">
								Login
							</label>

							<button
								type="button"
								className="btn-close btn-close-white"
								data-bs-dismiss="modal"
								aria-label="Close"
							/>
						</div>

						<div className="modal-body">
							<form onSubmit={handleOnSubmit}>
								{error ? (
									<div className={`alert alert-danger`} role="alert">
										{error}
									</div>
								) : (
									""
								)}
								<div className="mb-3">
									<label htmlFor="user" className="form-label">
										Email
									</label>
									<input
										type="email"
										name="email"
										className="form-control"
										id="user"
										onChange={handleInputChange}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="pass" className="form-label">
										Password
									</label>
									<input
										type="password"
										className="form-control"
										id="pass"
										data-type="password"
										name="password"
										onChange={handleInputChange}
									/>
								</div>

								<button type="submit" className="mt-4 btn btn-lg btn-formCreate btn-formClose">
									LOGIN
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalLogin;
