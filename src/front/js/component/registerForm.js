import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/register.scss";

const RegisterForm = () => {
	const { store, actions } = useContext(Context);
	const [data, setData] = useState({});
	const [register, setRegister] = useState(false);

	const [message, setMessage] = useState({
		show: true,
		text: ""
	});

	/*const actualizar = () =>{} entiendo debo hacer la funcion para que vaya bien el refresh puesto en el input*/

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
		<div className="alert alert-light" role="alert">
			Su usuario se ha creado correctamente
		</div>
	) : (
		<form
			onSubmit={e => {
				e.preventDefault();
				submitForm(e);
			}}
			className="form row g-3 ms-4 me-4"
			id="form">
			<div className="form-grupo" id="name">
				<label htmlFor="e-mail" className="form-label">
					Nombre/Razón Social
				</label>
				<div className="form-grupo-input">
					<input
						type="text"
						className="form-input"
						placeholder="Investy"
						name="name"
						onChange={handleInputChange}
						required
					/>
				</div>
			</div>

			<div className="form-grupo" id="grupo-postalCode">
				<label htmlFor="adress" className="form-label">
					Código Postal
				</label>
				<div className="form-grupo-input">
					<input
						type="text"
						className="form-input"
						id="postalCode"
						placeholder="Sólo números"
						name="postalCode"
						onChange={handleInputChange}
						required
					/>
				</div>
			</div>

			<div className="form-grupo" id="grupo-correo">
				<label htmlFor="e-mail" className="form-label">
					Correo electrónico
				</label>
				<div className="form-grupo-input">
					<input
						type="email"
						className="form-input"
						placeholder="correo@correo.com"
						name="email"
						onChange={handleInputChange}
						required
					/>
				</div>
			</div>

			<div className="form-grupo" id="grupo-apellidos">
				<label htmlFor="address" className="form-label">
					Dirección de la empresa
				</label>
				<div className="form-grupo-input">
					<input
						type="text"
						className="form-input"
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
				<label htmlFor="specificSizeInputDocNumber" className="form-label">
					Numero de identificación
				</label>
				<input
					type="text"
					className="form-input"
					name="numberDocumentation"
					onChange={handleInputChange}
					placeholder="Y99990000D"
					required
				/>
			</div>
			<div className="col-md-4">
				<label htmlFor="inputState" className="form-label">
					Tipo de documentación
				</label>
				<select id="inputState" className="form-select" onChange={handleInputChange} name="typeDocumentation">
					<option selected="true" disabled="disabled">
						Seleccione un tipo de documento
					</option>
					<option value="CIF">CIF</option>
					<option value="NIF">NIF</option>
					<option value="DNI">DNI</option>
				</select>
			</div>

			<div className="form-grupo" id="grupo-password">
				<label htmlFor="password" className="form-label">
					Contraseña
				</label>
				<div className="form-grupo-input">
					<input
						type="password"
						className="form-input"
						id="password"
						name="password"
						onChange={handleInputChange}
						placeholder="Recomendada letras y números"
						required
					/>
				</div>
			</div>

			<div className="form-grupo" id="grupo-password2">
				<label htmlFor="password2" className="form-label">
					Repetir Contraseña
				</label>
				<div className="form-grupo-input">
					<input type="password" className="form-input" id="passwordTwo" name="passwordTwo" />
				</div>
			</div>

			<div className="form-grupo form-grupo-btn-enviar">
				<button
					type="submit"
					className="btn btn-primary"
					onKeyPress={e => {
						e.key == "Enter" && e.preventDefault();
					}}>
					Registrarse
				</button>
			</div>
			{message.show && (
				<div className="alert" role="alert">
					{message.text}
				</div>
			)}
		</form>
	);
};

export default RegisterForm;
