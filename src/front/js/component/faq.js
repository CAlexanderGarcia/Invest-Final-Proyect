import React from "react";
import call_center from "../../img/call_center.png";

const Faq = () => {
	return (
		<div className="container">
			<div className="row">
				<h2 className="ms-4 featurette-heading bluedark-investy">FAQ</h2>
				<div className="col-md-8">
					<hr />
					<div className="accordion accordion-flush" id="accordionFlushExample">
						<div className="accordion-item">
							<h2 className="accordion-header" id="flush-headingOne">
								<button
									className="accordion-button collapsed fw-bold bluedark-investy"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapseOne"
									aria-expanded="false"
									aria-controls="flush-collapseOne">
									¿Es gratuito darme de alta en Investy?
								</button>
							</h2>
							<div
								id="flush-collapseOne"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingOne"
								data-bs-parent="#accordionFlushExample">
								<div className="accordion-body">
									Si, actualmente la aplicación esta libre y el único requisito es registrarse.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="flush-headingTwo">
								<button
									className="accordion-button collapsed fw-bold bluedark-investy"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapseTwo"
									aria-expanded="false"
									aria-controls="flush-collapseTwo">
									¿Puedo usar la web desde mi teléfono?
								</button>
							</h2>
							<div
								id="flush-collapseTwo"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingTwo"
								data-bs-parent="#accordionFlushExample">
								<div className="accordion-body">
									Por supuesto, la web esta optimizada para todo tipo de dispositivos móviles y
									sobremesa.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="flush-headingThree">
								<button
									className="accordion-button collapsed fw-bold bluedark-investy"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapseThree"
									aria-expanded="false"
									aria-controls="flush-collapseThree">
									¿Soy un autónomo independiente, puedo usar esta web?
								</button>
							</h2>
							<div
								id="flush-collapseThree"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingThree"
								data-bs-parent="#accordionFlushExample">
								<div className="accordion-body">
									Efectivamente, Investy esta diseñado para pequeñas y medianas empresas que pretendan
									llevar un control más fiable de su facturación.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="flush-headingFour">
								<button
									className="accordion-button collapsed fw-bold bluedark-investy"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapseFour"
									aria-expanded="false"
									aria-controls="flush-collapseFour">
									¿Esta web puede usarse para crear facturas en tiempo real?
								</button>
							</h2>
							<div
								id="flush-collapseFour"
								className="accordion-collapse collapse"
								aria-labelledby="flush-headingFour"
								data-bs-parent="#accordionFlushExample">
								<div className="accordion-body">
									Esa es una de las finalidades de Investy, poder ofrecer un servicio de facturación
									sencillo y manejable.
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="card border-0">
						<img src={call_center} className="card-img-top img-fluid" alt="..." />
						<div className="card-body">
							<p className="card-text">Puedes contactar con nosotros y resolveremos todas tus dudas.</p>
							<a href="#" className="btn bg-bluedark-investy text-white">
								Llámanos
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Faq;
