import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import Jumbotron from "../component/jumbotron.js";
import Jumbotron_2 from "../component/jumbotron-2.js";
import Products from "../component/products";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Products />
			<Jumbotron title="JAF" />
			<Jumbotron_2 />
		</div>
	);
};
