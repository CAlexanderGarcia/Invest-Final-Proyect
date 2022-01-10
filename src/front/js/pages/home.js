import React from "react";

import "../../styles/home.scss";
import Jumbotron_2 from "../component/jumbotron-2.js";
import Solution from "../component/solution";
import Valoration from "../component/valoration";
import Faq from "../component/faq";

export const Home = () => {
	return (
		<div className="container-fluid">
			<Solution />
			<Jumbotron_2 />
			<Valoration />
			<Faq />
		</div>
	);
};
