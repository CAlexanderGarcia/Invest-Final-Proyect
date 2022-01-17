import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const ListBills = () => {
	const [bills, setBills] = useState([]);
	const { actions, store } = useContext(Context);
	useEffect(() => {
		actions.listBill();
	}, []);
	return (
		<div>
			<Link to="bills">
				<button type="button" className="btn buttom-nsi fs-5 ms-5" data-bs-toggle="modal" data-bs-target="">
					<span id="span5" />
					<span id="span6" />
					<span id="span7" />
					<span id="span8" />
					Crear Factura
				</button>
			</Link>

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
					{store.listBills ? (
						store.listBills.map((value, index) => {
							return (
								<tr key={index}>
									<td className="col-1 td-CPP">{value.id}</td>
									<td className="col-2 text-center">{value.number}</td>
									<td className="col-2 text-center">{value.nif}</td>
									<td className="col-4 text-center">{value.date}</td>
									<td className="col-2 fw-bold text-center">{value.total}</td>
									<td className="col-1">
										<Link to="billdetail">
											<button className="btn btn-outline-success">Detalles</button>
										</Link>
									</td>
								</tr>
							);
						})
					) : (
						<tr>
							<td colSpan="6">No Hay Facturas</td>
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
		</div>
	);
};

export default ListBills;
