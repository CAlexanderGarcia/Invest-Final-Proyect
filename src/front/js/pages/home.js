import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import Form from "../component/form.js";
import Jumbotron from "../component/jumbotron.js";
import Jumbotron_2 from "../component/jumbotron-2.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Form />
			<Jumbotron title="JAF" />
			<Jumbotron_2 />
		</div>
	);
};
