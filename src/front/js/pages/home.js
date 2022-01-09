import React from "react";

import "../../styles/home.scss";
import Jumbotron from "../component/jumbotron.js";
import Jumbotron_2 from "../component/jumbotron-2.js";
import Solution from "../component/solution";
import Valoration from "../component/valoration";

export const Home = () => {
	return (
		<div className="container-fluid">
			<Jumbotron title="Investy" />
			<Solution />
			<Jumbotron_2 />
			<Valoration />
		</div>
	);
};
