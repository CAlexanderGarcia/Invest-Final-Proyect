import React from "react";
import React, { useContext, useEffect, useState } from "react";

const Form = () => {
	const { store, actions } = useContext(Context);
	const [data, setData] = useState({
		email: "",
		name: "",
		password: ""
	});

	const handleInputChange = event => {
		let value = event.target.value;
		if (event.target.name == "usuario") {
			value = parseInt(value);
		}
		setData({
			...data,
			[event.target.name]: value
		});
	};

	return (
		<form action="" className="formulario row g-3 ms-4 me-4" id="formulario">
			<div className="formulario__grupo row g-3" id="grupo__usuario">
				<label htmlFor="usuario" className="form-label">
					Usuario
				</label>
				<div className="formulario__grupo-input">
					<input
						type="text"
						className="form-input"
						id="usuario"
						placeholder="Tu usuario"
						name="usuario"
						onChange={handleInputChange}
					/>
					<i className="formulario__validacion-estado far fa-times-circle" />
				</div>
				<p className="formulario__input-error">
					El usuario tiene que ser de 4 a 21 dígitos y solo puede contener letras y guión
				</p>
			</div>

			<div className="formulario__grupo row g-3" id="grupo__nombre">
				<label htmlFor="nombre" className="form-label">
					Nombre
				</label>
				<div className="formulario__grupo-input">
					<input type="text" className="form-input" id="nombre" placeholder="John" name="First name" />
					<i className="formulario__validacion-estado far fa-times-circle" />
				</div>
				<p className="formulario__input-error">
					El nombre tiene que ser de 4 a 21 dígitos y solo puede contener letras y guión
				</p>
			</div>

			<div className="formulario__grupo" id="grupo__apellidos">
				<label htmlFor="apellidos" className="form-label">
					Apellidos
				</label>
				<div className="formulario__grupo-input">
					<input type="text" className="form-input" id="apellidos" placeholder="Doe" name="Last name" />
					<i className="formulario__validacion-estado far fa-times-circle" />
				</div>
				<p className="formulario__input-error">
					El apellidos tiene que ser de 4 a 21 dígitos y solo puede contener letras y guión
				</p>
			</div>

			<div className="formulario__grupo" id="grupo__correo">
				<label htmlFor="e-mail" className="form-label">
					Correo electrónico
				</label>
				<div className="formulario__grupo-input">
					<input
						type="email"
						className="form-input"
						id="e-mail"
						placeholder="correo@correo.com"
						name="e-mail"
					/>
					<i className="formulario__validacion-estado far fa-times-circle" />
				</div>
				<p className="formulario__input-error">El e-mail tiene que tener puntos, guiones, letras y @</p>
			</div>

			<div className="formulario__grupo" id="grupo__apellidos">
				<label htmlFor="adress" className="form-label">
					Dirección de la empresa
				</label>
				<div className="formulario__grupo-input">
					<input type="text" className="form-input" id="adress" placeholder="Doe" aria-label="adress" />
					<i className="formulario__validacion-estado far fa-times-circle" />
				</div>
				<p className="formulario__input-error">Dirección de la empresa debe contener letras y numeros</p>
			</div>

			<div className="col-md-6">
				<label htmlFor="inputCompany" className="form-label">
					Razón Social
				</label>
				<input type="text" className="form-input" id="inputCompany" />
			</div>
			<div className="col-md-6">
				<label htmlFor="specificSizeInputDocNumber" className="form-label">
					Numero de identificación
				</label>
				<input type="text" className="form-input" id="specificSizeInputDocNumber" />
			</div>
			<div className="col-md-4">
				<label htmlFor="inputState" className="form-label">
					Tipo de documentación
				</label>
				<select id="inputState" className="form-select">
					<option selected>Seleccione...</option>
					<option>DNI</option>
					<option>NIE</option>
					<option>NIF</option>
				</select>
			</div>

			<div className="formulario__grupo" id="grupo__password">
				<label htmlFor="password" className="form-label">
					Contraseña
				</label>
				<div className="formulario__grupo-input">
					<input type="password" className="form-input" id="password" name="password" />
					<i className="formulario__validacion-estado far fa-times-circle" />
				</div>
				<p className="formulario__input-error">
					la contraseña debe tener de 4 a 12 dígitos, debe contener letras y números
				</p>
			</div>

			<div className="formulario__grupo" id="grupo__password2">
				<label htmlFor="password2" className="form-label">
					Repetir Contraseña
				</label>
				<div className="formulario__grupo-input">
					<input type="password" className="form-input" id="password2" name="password2" />
					<i className="formulario__validacion-estado far fa-times-circle" />
				</div>
				<p className="formulario__input-error">ambas contraseñas deben coincidir</p>
			</div>

			<div className="formulario__grupo-terminos" id="grupo__terminos">
				<label className="form-label">
					<input className="formulario__checkbox" type="checkbox" name="terminos" id="terminos" />
					Acepto terminos y condiciones
				</label>
			</div>

			<div className="formulario__mensaje" id="formulario__mensaje">
				<p>
					<i className="fas fa-exclamation-triangle" /> <b>Error:</b> Por favor rellena el formulario de forma
					correcta
				</p>
			</div>

			<div className="formulario__grupo formulario__grupo-btn-enviar">
				<button type="submit" className="btn btn-primary">
					Registrarse
				</button>
				<p className="formulario__mensaje-exito" id="formulario__mensaje-exito">
					Registro exitoso
				</p>
			</div>
		</form>
	);
};

export default Form;
