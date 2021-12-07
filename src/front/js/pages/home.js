import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
<<<<<<< HEAD
import Form from "../component/form.js";
=======
import Jumbotron from "../component/jumbotron.js";
import Jumbotron_2 from "../component/jumbotron-2.js";
>>>>>>> cd0b9a9b8e8c924b01e335c8fac88775c1cf4902

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
<<<<<<< HEAD
			<Form />
=======
			<Jumbotron title="JAF" />
			<Jumbotron_2 />
>>>>>>> cd0b9a9b8e8c924b01e335c8fac88775c1cf4902
		</div>
	);
};
