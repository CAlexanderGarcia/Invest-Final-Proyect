import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/register.scss";
import FooterFixed from "../component/footerFixed";

const RegisterForm = () => {
	const { store, actions } = useContext(Context);
	const [data, setData] = useState({});
	const [register, setRegister] = useState(false);

	const [message, setMessage] = useState({
		show: true,
		text: ""
	});

	const handleInputChange = event => {
		setData({
			...data,
			[event.target.name]: event.target.value
		});
	};
	const submitForm = event => {
		event.preventDefault();
		actions.createUser(data).then(result => {
			if (result && !result.created) {
				return setMessage({ show: true, text: result.message });
			} else {
				setRegister(true);
				return setMessage({ show: false, text: "" });
			}
		});
	};

	return register ? (
		<div className="container form">
			<div className="alert alert-success mt-4" role="alert">
				Su usuario se ha creado correctamente
			</div>
			<FooterFixed />
		</div>
	) : (
		<div className="container form">
			<h2 className="featurette-heading bluedark-investy mt-4">Registro</h2>
			<form
				onSubmit={e => {
					e.preventDefault();
					submitForm(e);
				}}
				id="form">
				<div className="row g-3 mt-1">
					<div className="col-md-6">
						<div className="input-group" id="name">
							<span className="input-group-text bg-bluedark-investy text-white">Razón Social</span>

							<input
								type="text"
								className="form-control"
								placeholder="Investy"
								name="company"
								onChange={handleInputChange}
								required
							/>
							{/* </div> */}
						</div>
					</div>
					<div className="col-md-6">
						<div className="input-group">
							<span className="input-group-text bg-bluedark-investy text-white">Nombre</span>

							<input
								type="text"
								className="form-control"
								placeholder="Investy"
								name="surname"
								onChange={handleInputChange}
								required
							/>
						</div>
					</div>
				</div>
				<div className="row g-3 mt-1">
					<div className="col-md-12">
						<div className="input-group">
							<span className="input-group-text bg-bluedark-investy text-white">Correo electrónico</span>
							<input
								type="email"
								className="form-control"
								placeholder="correo@correo.com"
								name="email"
								onChange={handleInputChange}
								required
							/>
						</div>
					</div>
				</div>
				<div className="row g-3 mt-1">
					<div className="col-md-6">
						<div className="input-group">
							<span className="input-group-text bg-bluedark-investy text-white">
								Dirección de empresa
							</span>
							<input
								type="text"
								className="form-control"
								id="address"
								placeholder="Calle Investy, 12"
								aria-label="adress"
								name="address"
								onChange={handleInputChange}
								required
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="input-group">
							<span className="input-group-text bg-bluedark-investy text-white">Código postal</span>
							<input
								type="text"
								className="form-control"
								id="postalCode"
								placeholder="Sólo números"
								name="postalCode"
								onChange={handleInputChange}
								required
							/>
						</div>
					</div>
				</div>
				<div className="row g-3 mt-1">
					<div className="col-md-6">
						<div className="input-group">
							<span className="input-group-text bg-bluedark-investy text-white">
								Número de identificación
							</span>
							<input
								type="text"
								className="form-control"
								name="numberDocumentation"
								onChange={handleInputChange}
								placeholder="Y99990000D"
								required
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="input-group">
							<span className="input-group-text bg-bluedark-investy text-white">
								Tipo de documentación
							</span>
							<select
								id="inputState"
								className="form-select"
								onChange={handleInputChange}
								name="typeDocumentation">
								<option selected="true" disabled="disabled">
									Seleccione un tipo de documento
								</option>
								<option value="CIF">CIF</option>
								<option value="NIF">NIF</option>
								<option value="DNI">DNI</option>
							</select>
						</div>
					</div>
				</div>

				<div className="row g-3 mt-1">
					<div className="col-md-6">
						<div className="input-group">
							<span className="input-group-text bg-bluedark-investy text-white">Contraseña</span>

							<input
								type="password"
								className="form-control"
								id="password"
								name="password"
								onChange={handleInputChange}
								placeholder="Recomendada letras y números"
								required
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="input-group">
							<span className="input-group-text bg-bluedark-investy text-white">Repetir Contraseña</span>

							<input type="password" className="form-control" id="passwordTwo" name="passwordTwo" />
						</div>
					</div>
				</div>

				<div className="form-grupo form-grupo-btn-enviar">
					<button
						type="submit"
						className="btn bg-bluedark-investy text-white"
						onKeyPress={e => {
							e.key == "Enter" && e.preventDefault();
						}}>
						Registrarse
					</button>
				</div>
				{message.text && (
					<div className="alert alert-danger" role="alert">
						{message.text}
					</div>
				)}
			</form>
			<FooterFixed />
		</div>
	);
};

export default RegisterForm;
