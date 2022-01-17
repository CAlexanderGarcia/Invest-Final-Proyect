import React from "react";

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
			<Intro />
			<Pricing />
			<Valoration />
			<Team />
			<Faq />
			<ComingSoon />
		</div>
	);
};
