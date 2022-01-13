import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";

const ListBills = () => {
	const [bills, setBills] = useState([]);
	const { actions, store } = useContext(Context);
	useEffect(() => {
		setBills(actions.listBill());
	}, []);
	return (
		<div>
			<h1 className="text-center fw-bolder mt-5 ">FACTURAS</h1>
			<table className="table container my-5 shadow ">
				<thead className="table-success text-center">
					<tr>
						<th scope="col text-info">ID</th>
						<th scope="col">Número de Factura</th>
						<th scope="col">NIF</th>
						<th scope="col">Día</th>
						<th scope="col">Total</th>
						<th scope="col" />
					</tr>
				</thead>
				<tbody className="text-center ">
					{store.listBills ? (
						store.listBills.map((value, index) => {
							return (
								<tr key={index}>
									<th scope="row">{value.id}</th>
									<td>{value.number}</td>
									<td>{value.nif}</td>
									<td>{value.date}</td>
									<td className="fw-bold">{value.total}</td>
									<td>
										<button className="btn btn-outline-success">
											<i className="fas fa-plus" />
										</button>
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
						<a className="page-link">Previous</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">
							1
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">
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
