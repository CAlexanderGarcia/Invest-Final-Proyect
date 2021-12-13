import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const Modal = () => {
	const { store, actions } = useContext(Context);
	const [data, setData] = useState({
		email: "",
		password: ""
	});

	const handleInputChange = event => {
		setData({
			...data,
			[event.target.name]: event.target.value
		});
	};

	const submitForm = event => {
		event.preventDefault();
		actions.login(data.email, data.password).then(result => {
			actions.setToken(result.token);
		});
	};

	return (
		<div>
			<button type="button" className="btn Modal fs-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
								Login
							</label>

							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
						</div>

						<div className="modal-body" />

						<form className="login-form" onSubmit={submitForm}>
							<div className="group">
								<label htmlFor="email" className="label">
									Email
								</label>
								<input
									id="email"
									type="email"
									className="input"
									name="email"
									onChange={handleInputChange}
								/>
							</div>

							<div className="group">
								<label htmlFor="password" className="label">
									Password
								</label>
								<input
									onChange={handleInputChange}
									id="password"
									type="password"
									className="input"
									data-type="password"
									name="password"
								/>
							</div>
							<div className="group">
								<input type="submit" className="button" value="Login" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;

//		<p>
//			{store.login.map((value, index) => {
//				return <p key={index}>{value.Username}</p>;
//			})}
//		</p>
