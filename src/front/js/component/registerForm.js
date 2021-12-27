import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/register.scss";
import { Link, useHistory } from "react-router-dom";

const RegisterForm = () => {
	const { store, actions } = useContext(Context);
	const [data, setData] = useState({});
	let history = useHistory();

	const handleInputChange = event => {
		setData({
			...data,
			[event.target.name]: event.target.value
		});
	};
	const submitForm = event => {
		event.preventDefault();
		actions.createUser(data).then(result => {
			console.log(result);
			if (result.created) {
				history.push("/");
			}
		});
	};

	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				submitForm(e);
			}}
			className="formulario row g-3 ms-4 me-4"
			id="formulario">
			{/* <div className="formulario-grupo row g-3" id="grupo-usuario">
				<label htmlFor="usuario" className="form-label">
					Usuario
				</label>
				<div className="formulario-grupo-input">
					<input
						type="text"
						className="form-input"
						id="usuario"
						placeholder="Tu usuario"
						name="usuario"
						onChange={handleInputChange}
					/>
					<i className="formulario-validacion-estado far fa-times-circle" />
				</div>
				<p className="formulario-input-error">
					El usuario tiene que ser de 4 a 21 dígitos y solo puede contener letras y guión
				</p>
			</div> */}

			<div className="formulario-grupo row g-3" id="grupo-nombre">
				<label htmlFor="nombre" className="form-label">
					Nombre
				</label>
				<div className="formulario-grupo-input">
					<input
						type="text"
						className="form-input"
						id="nombre"
						placeholder="John"
						name="name"
						onChange={handleInputChange}
					/>
					<i className="formulario-validacion-estado far fa-times-circle" />
				</div>
				<p className="formulario-input-error">
					El nombre tiene que ser de 4 a 21 dígitos y solo puede contener letras y guión
				</p>
			</div>

			<div className="formulario-grupo" id="grupo-apellidos">
				<label htmlFor="apellidos" className="form-label">
					Apellidos
				</label>
				<div className="formulario-grupo-input">
					<input
						type="text"
						className="form-input"
						id="apellidos"
						placeholder="Doe"
						name="surname"
						onChange={handleInputChange}
					/>
					<i className="formulario-validacion-estado far fa-times-circle" />
				</div>
				<p className="formulario-input-error">
					El apellidos tiene que ser de 4 a 21 dígitos y solo puede contener letras y guión
				</p>
			</div>

			<div className="formulario-grupo" id="grupo-correo">
				<label htmlFor="e-mail" className="form-label">
					Correo electrónico
				</label>
				<div className="formulario-grupo-input">
					<input
						type="email"
						className="form-input"
						placeholder="correo@correo.com"
						name="email"
						onChange={handleInputChange}
					/>
					<i className="formulario-validacion-estado far fa-times-circle" />
				</div>
				<p className="formulario-input-error">El e-mail tiene que tener puntos, guiones, letras y @</p>
			</div>

			<div className="formulario-grupo" id="grupo-apellidos">
				<label htmlFor="adress" className="form-label">
					Dirección de la empresa
				</label>
				<div className="formulario-grupo-input">
					<input
						type="text"
						className="form-input"
						id="adress"
						placeholder="Doe"
						aria-label="adress"
						name="adress"
						onChange={handleInputChange}
					/>
					<i className="formulario-validacion-estado far fa-times-circle" />
				</div>
				<p className="formulario-input-error">Dirección de la empresa debe contener letras y numeros</p>
			</div>

			{/* <div className="col-md-6">
				<label htmlFor="inputCompany" className="form-label">
					Razón Social
				</label>
				<input type="text" className="form-input" name="razonSocial" onChange={handleInputChange} />
			</div> */}
			<div className="col-md-6">
				<label htmlFor="specificSizeInputDocNumber" className="form-label">
					Numero de identificación
				</label>
				<input type="text" className="form-input" name="numberDocumentation" onChange={handleInputChange} />
			</div>
			<div className="col-md-4">
				<label htmlFor="inputState" className="form-label">
					Tipo de documentación
				</label>
				<select
					id="inputState"
					className="form-select"
					defaultValue="Seleccionar"
					onChange={handleInputChange}
					name="tipoDocumentacion">
					<option>DNI</option>
					<option>NIE</option>
					<option>NIF</option>
				</select>
			</div>

			<div className="formulario-grupo" id="grupo-password">
				<label htmlFor="password" className="form-label">
					Contraseña
				</label>
				<div className="formulario-grupo-input">
					<input
						type="password"
						className="form-input"
						id="password"
						name="password"
						onChange={handleInputChange}
					/>
					<i className="formulario-validacion-estado far fa-times-circle" />
				</div>
				<p className="formulario-input-error">
					la contraseña debe tener de 4 a 12 dígitos, debe contener letras y números
				</p>
			</div>

			<div className="formulario-grupo" id="grupo-password2">
				<label htmlFor="password2" className="form-label">
					Repetir Contraseña
				</label>
				<div className="formulario-grupo-input">
					<input type="password" className="form-input" id="passwordTwo" name="passwordTwo" />
					<i className="formulario-validacion-estado far fa-times-circle" />
				</div>
				<p className="formulario-input-error">ambas contraseñas deben coincidir</p>
			</div>

			<div className="formulario-grupo-terminos" id="grupo-terminos">
				<label className="form-label">
					<input
						className="formulario-checkbox"
						type="checkbox"
						name="terminos"
						id="terminos"
						onChange={handleInputChange}
					/>
					Acepto terminos y condiciones
				</label>
			</div>

			<div className="formulario-mensaje" id="formulario-mensaje">
				<p>
					<i className="fas fa-exclamation-triangle" /> <b>Error:</b> Por favor rellena el formulario de forma
					correcta
				</p>
			</div>

			<div className="formulario-grupo formulario-grupo-btn-enviar">
				<button
					type="submit"
					className="btn btn-primary"
					onKeyPress={e => {
						e.key == "Enter" && e.preventDefault();
					}}>
					Registrarse
				</button>
				<Link to="/">Go to login</Link>
				<p className="formulario-mensaje-exito" id="formulario-mensaje-exito">
					Registro exitoso
				</p>
			</div>
			<Link to="/">Back to Home</Link>
		</form>
	);
};

export default RegisterForm;
