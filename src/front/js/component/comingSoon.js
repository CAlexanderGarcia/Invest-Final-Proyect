import React from "react";

const ComingSoon = () => {
	return (
		<div className="container">
			<hr className="bluedark-investy mb-5" />
			<h1 className="fw-bold text-center">PRÓXIMAMENTE...</h1>
			<p className="text-center">
				Poder realizar cualquier tipo de gráficas en tiempo real para un mayor control sobre tu empresa
			</p>
			<div className="board row">
				<div>
					<h3 className="text-center">Ventas</h3>
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
