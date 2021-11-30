import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Jumbotron from "../component/jumbotron.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Jumbotron />
		</div>
	);
};
