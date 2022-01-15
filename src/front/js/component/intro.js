import React from "react";
import office01 from "../../img/office01.png";
import office02 from "../../img/office02.png";
import office03 from "../../img/office03.png";
import jumbo01 from "../../img/jumbo01.png";
import jumbo02 from "../../img/jumbo02.png";
import jumbo03 from "../../img/jumbo03.png";
import fredy from "../../img/fredy.png";
import juan from "../../img/juan.png";
import alex from "../../img/alex.png";

const Intro = () => {
	return (
		<div>
			<div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#myCarousel"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					/>
					<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" />
					<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" />
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src={office01} className="bd-placeholder-img" width="100%" height="100%" />

						<div className="container">
							<div className="carousel-caption text-start shadow-b">
								<h1>Bienvenid@ a Investy</h1>
								<p>Creamos soluciones para tu empresa</p>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<img src={office02} className="bd-placeholder-img" width="100%" height="100%" />

						<div className="container">
							<div className="carousel-caption shadow-b">
								<h1>Queremos conocerte</h1>
								<p>No trabajamos con números, trabajamos con personas</p>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<img src={office03} className="bd-placeholder-img" width="100%" height="100%" />

						<div className="container">
							<div className="carousel-caption text-end shadow-b">
								<h1>Siempre conectados</h1>
								<p>24/7 todos los dias del año</p>
							</div>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#myCarousel"
					data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#myCarousel"
					data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="visually-hidden">Next</span>
				</button>
			</div>

			<div className="container marketing my-5">
				<h2 className="featurette-heading bluedark-investy">Nuestro equipo</h2>
				<hr className="bluedark-investy mb-5" />
				<div className="row text-center">
					<div className="col-lg-4">
						<img
							src={alex}
							className="bd-placeholder-img rounded-circle"
							width="140"
							height="140"
							role="img"
						/>

						<h2 className="bluedark-investy">Alexander García</h2>
						<p>Búsqueda en la vida, sensaciones por la música, aventura en la programación.</p>
					</div>
					<div className="col-lg-4">
						<img
							src={fredy}
							className="bd-placeholder-img rounded-circle"
							width="140"
							height="140"
							role="img"
						/>

						<h2 className="bluedark-investy">Fredy Moreno</h2>
						<p>DJ de vocación, informático de profesión y freak por afición</p>
					</div>
					<div className="col-lg-4">
						<img
							src={juan}
							className="bd-placeholder-img rounded-circle"
							width="140"
							height="140"
							role="img"
						/>

						<h2 className="bluedark-investy">Juan David Escobar</h2>
						<p>Con gusto por la lectura, la musica y la programacion...</p>
					</div>
				</div>

				<hr className="featurette-divider bluedark-investy" />

				<div className="row featurette">
					<div className="col-md-7">
						<h2 className="featurette-heading bluedark-investy">
							Productividad. <span className="grey-investy">Calidad.</span>
						</h2>
						<p className="lead">
							Trabajamos cada dia para ser mas eficientes y, es por ello que en Investy ofrecemos la
							calidad que nuestros clientes merecen. Siempre buscando la productividad, valorando el
							tiempo que se invierte en cada proyecto y ofreciendo el cien por cien a cada cliente. Todo
							esto acompañado de unos estándares de calidad que Investy mantiene y exige, hacen que cada
							cliente sea uno más de nosotros; compartiendo recursos y haciendo crecer tu negocio.
						</p>
					</div>
					<div className="col-md-5">
						<img
							src={jumbo01}
							className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
							width="500"
							height="500"
							role="img"
						/>
					</div>
				</div>

				<hr className="featurette-divider bluedark-investy" />

				<div className="row featurette">
					<div className="col-md-7 order-md-2">
						<h2 className="featurette-heading bluedark-investy">
							Control. <span className="grey-investy">Organización.</span>
						</h2>
						<p className="lead">
							Tus clientes, productos, proveedores y facturas siempre a mano. La organización es la clave
							para poder ser mucho más productivos y es por ello que Investy te facilita una gestión de la
							información esencial de tu empresa o negocio. Crear y añadir productos, dar de alta un
							cliente o generar una factura en el momento sin necesidad de ir a la oficina. Todo en la
							palma de tu mano, para poder visualizar Investy en un ordenador o smartphone. Siempre
							preocupandonos de un diseño amigable y adaptado para una correcta usabilidad.
						</p>
					</div>
					<div className="col-md-5 order-md-1">
						<img
							src={jumbo02}
							className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
							width="500"
							height="500"
							role="img"
						/>
					</div>
				</div>

				<hr className="featurette-divider bluedark-investy" />

				<div className="row featurette">
					<div className="col-md-7">
						<h2 className="featurette-heading bluedark-investy">
							Tu smartphone. <span className="grey-investy">Tu oficina.</span>
						</h2>
						<p className="lead">
							Gracias a Investy no dependeras siempre de tu oficina. LLeva en tu portátil toda tu
							documentación, genera una factura en tiempo real y envíasela a tu cliente sin más necesidad
							que conexión a internet. Estamos siempre disponibles para ti, habilitando nuestro chat en
							vivo par solucionar los principales problemas que puedan surgir. Y por supuesto, nos
							encantaría conocer tu experiencia y tu valoración; para que juntos podamos seguir creciendo.
						</p>
					</div>
					<div className="col-md-5">
						<img
							src={jumbo03}
							className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
							width="500"
							height="500"
							role="img"
						/>
					</div>
				</div>

				<hr className="featurette-divider bluedark-investy" />
			</div>
		</div>
	);
};

export default Intro;
