import React from "react";

const ComingSoon = () => {
	return (
		<div className="container">
			<h2 className="featurette-heading bluedark-investy">Muy pronto disponible</h2>
			<hr className="bluedark-investy" />
			<p>Creación de reportes gráficos en tiempo real para un mayor control sobre tu empresa.</p>
			<div className="board">
				<div className="titulo_grafica">
					<h3 className="t_grafica">Ventas</h3>
				</div>
				<div className="sub_board">
					<div className="sep_board" />
					<div className="cont_board">
						<div className="graf_board">
							<div className="barra">
								<div className="sub_barra b1">
									<div className="tag_g">35%</div>
									<div className="tag_leyenda">día 1</div>
								</div>
							</div>
							<div className="barra">
								<div className="sub_barra b2">
									<div className="tag_g">45%</div>
									<div className="tag_leyenda">día 2</div>
								</div>
							</div>
							<div className="barra">
								<div className="sub_barra b3">
									<div className="tag_g">55%</div>
									<div className="tag_leyenda">día 3</div>
								</div>
							</div>
							<div className="barra">
								<div className="sub_barra b4">
									<div className="tag_g">75%</div>
									<div className="tag_leyenda">día 4</div>
								</div>
							</div>
							<div className="barra">
								<div className="sub_barra b5">
									<div className="tag_g">85%</div>
									<div className="tag_leyenda">día 5</div>
								</div>
							</div>
						</div>
						<div className="tag_board">
							<div className="sub_tag_board">
								<div>100</div>
								<div>90</div>
								<div>80</div>
								<div>70</div>
								<div>60</div>
								<div>50</div>
								<div>40</div>
								<div>30</div>
								<div>20</div>
								<div>10</div>
							</div>
						</div>
					</div>
					<div className="sep_board" />
				</div>
			</div>
		</div>
	);
};

export default ComingSoon;
