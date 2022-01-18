import React, { useRef } from "react";

import "../../styles/home.scss";
import Valoration from "../component/valoration";
import Faq from "../component/faq";
import Pricing from "../component/pricing";
import Intro from "../component/intro";
import ComingSoon from "../component/comingSoon";
import Team from "../component/team";
import Footer from "../component/footer";

export const Home = () => {
	return (
		<div className="col-12">
			<Intro id="informacion-link" />
			<Pricing id="suscripciones-link" />
			<Valoration />
			<Team id="nosotros-link" />
			<Faq />
			<ComingSoon />
			<Footer />
		</div>
	);
};
