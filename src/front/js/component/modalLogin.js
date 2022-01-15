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
				className="btn fs-5 buttom-nsi text-success"
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
				<div className="modal-dialog login-wrap">
					<div className="modal-content login-html ">
						<div className="modal-header">
							<label htmlFor="tab-1" className="tab text-center text-white">
								Sign In
							</label>

							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
						</div>

						<div className="modal-body" />
						{error ? (
							<div className={`alert alert-danger`} role="alert">
								{error}
							</div>
						) : (
							""
						)}
						<form className="login-form " onSubmit={handleOnSubmit}>
							<div className="group">
								<label htmlFor="user" className="label">
									Email
								</label>
								<input
									id="user"
									type="email"
									className="input"
									name="email"
									onChange={handleInputChange}
								/>
							</div>

							<div className="group">
								<label htmlFor="pass" className="label">
									Password
								</label>
								<input
									id="pass"
									type="password"
									className="input"
									data-type="password"
									name="password"
									onChange={handleInputChange}
								/>
							</div>

							<div className="group">
								<input id="check" type="checkbox" className="check" />
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

export default ModalLogin;
