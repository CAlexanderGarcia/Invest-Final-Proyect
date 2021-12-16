import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const ModalRegisterSupplier = () => {
	const { store, actions } = useContext(Context);
	const [data, setData] = useState({});
	const handleInputChange = event => {
		setData({
			...data,
			[event.target.name]: event.target.value
		});
	};
	const submitForm = event => {
		event.preventDefault();
		actions.createSupplier(data).then(result => {
			console.log(result);
			if (result.created) {
				setMessage({ show: true, text: " creado" });
			}
		});
	};
	return (
		<div>
			<button type="button" className="btn Modal fs-5" data-bs-toggle="modal" data-bs-target="#supplierModal">
				<span id="span5" />
				<span id="span6" />
				<span id="span7" />
				<span id="span8" />
				Nuevo Proveedor
			</button>
			<div
				className="modal fade"
				id="supplierModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							Datos nuevo proveedor
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
						</div>
						<form onSubmit={submitForm}>
							<div className="group p-2">
								<label htmlFor="user" className="label p-2">
									Nombre
								</label>
								<input
									id="user"
									type="text"
									className="input"
									name="nombre"
									onChange={handleInputChange}
								/>
							</div>

							<div className="group p-2">
								<label htmlFor="pass" className="label p-2">
									NIF
								</label>
								<input
									id="pass"
									type="text"
									className="input"
									data-type="text"
									name="nif"
									onChange={handleInputChange}
								/>
							</div>

							<div className="group p-2">
								<label htmlFor="pass" className="label p-2">
									Dirección
								</label>
								<input
									id="pass"
									type="text"
									className="input"
									data-type="text"
									name="direccion"
									onChange={handleInputChange}
								/>
							</div>

							<div className="group p-2">
								<label htmlFor="pass" className="label p-2">
									Código postal
								</label>
								<input
									id="pass"
									type="text"
									className="input"
									data-type="text"
									name="codigoPostal"
									onChange={handleInputChange}
								/>
							</div>

							<div className="group p-2">
								<input type="submit" className="button" value="Guardar" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalRegisterSupplier;

//		<p>
//			{store.login.map((value, index) => {
//				return <p key={index}>{value.Username}</p>;
//			})}
//		</p>
