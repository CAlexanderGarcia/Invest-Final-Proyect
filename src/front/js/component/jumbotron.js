import React from "react";
import PropTypes from "prop-types";

const Jumbotron = props => {
	return (
		<div className="container-fluid first-Jumbotron">
			<h1 className="text-white title text-center">{props.title}</h1>
		</div>
	);
};

Jumbotron.propTypes = {
	title: PropTypes.string
};
export default Jumbotron;

/*<p> La mejor herramienta para controlar los movimientos de tu empresa </p>*/
