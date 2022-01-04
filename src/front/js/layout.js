import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import RegisterForm from "./component/registerForm";
import Client from "./pages/client";
import Footer from "./component/footer";
import Supplier from "./pages/supplier";
import Product from "./pages/product";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/register-form">
							<RegisterForm />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/client">
							<Client />
						</Route>
						<Route exact path="/product">
							<Product />
						</Route>
						<Route exact path="/supplier">
							<Supplier />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
