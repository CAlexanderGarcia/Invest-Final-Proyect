import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import Jumbotron from "../component/jumbotron.js";
import Jumbotron_2 from "../component/jumbotron-2.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Jumbotron title="JAF" />
			<Jumbotron_2 />
		</div>
	);
};
