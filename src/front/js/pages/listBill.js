import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import FooterFixed from "../component/footerFixed";
import billsPhoto from "../../img/bills.png";

const ListBills = () => {
	const [bills, setBills] = useState([]);
	const { actions, store } = useContext(Context);
	useEffect(() => {
		actions.listBill();
	}, []);
	return (
		<div className="container justify-content-between">
			<h2 className="featurette-heading bluedark-investy mt-3">Facturas</h2>
			<hr className="featurette-divider bluedark-investy" />
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<img src={billsPhoto} className="img-fluid" />
					</div>

					<div className="col-md-8">
						<p className="lead">
							Desde esta sección puedes gestionar todos tus clientes; desde su creación hasta su
							eliminación. Posteriormente podrás visualizarlos y seleccionarlos en factura.
						</p>
						<div className="bg-white text-center">
							<Link to="bills">
								<button
									type="button"
									className="btn fs-4 buttom-nsi mt-5 fw-bold"
									data-bs-toggle="modal"
									data-bs-target="">
									<span id="span5" />
									<span id="span6" />
									<span id="span7" />
									<span id="span8" />
									CREAR FACTURA
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<table className="container table table-striped my-5 shadow-lg">
				<thead>
					<tr className="tr-CPP bluedark-investy">
						<th scope="col" className="th-CPP">
							ID
						</th>
						<th scope="col" className="th-CPP">
							Nº Factura
						</th>
						<th scope="col" className="th-CPP">
							NIF
						</th>
						<th scope="col" className="th-CPP">
							Día
						</th>
						<th scope="col" className="th-CPP">
							Total
						</th>
						<th />
					</tr>
				</thead>
				<tbody className="table-hover">
					{store.listBills && store.listBills.length > 0 ? (
						store.listBills.map((value, index) => {
							return (
								<tr key={index}>
									<td className="col-1 td-CPP">{value.id}</td>
									<td className="col-2 text-center">{value.number}</td>
									<td className="col-2 text-center">{value.nif}</td>
									<td className="col-4 text-center">{value.date}</td>
									<td className="col-2 fw-bold text-center">{value.total}</td>
									<td className="col-1">
										<Link to={"billdetail/" + value.id}>
											<button className="btn btn-formCreate2 shadow-lg">Detalles</button>
										</Link>
									</td>
								</tr>
							);
						})
					) : (
						<tr>
							<td colSpan="6" className="text-center">
								No tiene facturas añadidas
							</td>
						</tr>
					)}
				</tbody>
			</table>
			<nav aria-label="...">
				<ul className="pagination justify-content-center">
					<li className="page-item">
						<a className="page-link bluedark-investy">Previous</a>
					</li>
					<li className="page-item">
						<a className="page-link bluedark-investy" href="#">
							1
						</a>
					</li>
					<li className="page-item">
						<a className="page-link bluedark-investy" href="#">
							Next
						</a>
					</li>
				</ul>
			</nav>
			{/*<h1 className="text-center fw-bolder mt-5">COMPRAS</h1>
			<table className="table container my-5 shadow">
				<thead className="table-primary text-center">
					<tr>
						<th scope="col text-info">ID</th>
						<th scope="col">Número de Factura</th>
						<th scope="col">NIF</th>
						<th scope="col">Día</th>
						<th scope="col">Total</th>
						<th scope="col" />
					</tr>
				</thead>
				<tbody className="text-center">
					<tr>
						<th scope="row">1</th>
						<td>8945623984563</td>
						<td>Y74589546</td>
						<td>25/05/2022</td>
						<td className="fw-bold">$56123</td>
						<td>
							<button className="btn btn-outline-success">
								<i className="fas fa-plus" />
							</button>
						</td>
					</tr>
				</tbody>
			</table>
			<nav aria-label="...">
				<ul className="pagination justify-content-center">
					<li className="page-item">
						<a className="page-link">Previous</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">
							1
						</a>
					</li>
					<li className="page-item active" aria-current="page">
						<a className="page-link" href="#">
							2
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">
							3
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">
							Next
						</a>
					</li>
				</ul>
			</nav>*/}
			<FooterFixed />
		</div>
	);
};

export default ListBills;
