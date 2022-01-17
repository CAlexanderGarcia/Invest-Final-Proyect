import React, { useRef } from "react";

import "../../styles/home.scss";
import Valoration from "../component/valoration";
import Faq from "../component/faq";
import Pricing from "../component/pricing";
import Intro from "../component/intro";
import ComingSoon from "../component/comingSoon";
import Team from "../component/team";

export const Home = () => {
	return (
		<div className="container-fluid">
			<Intro id="informacion-link" />
			<Pricing id="suscripciones-link" />
			<Valoration />
			<Team id="nosotros-link" />
			<Faq />
			<ComingSoon />
		</div>
	);
};
