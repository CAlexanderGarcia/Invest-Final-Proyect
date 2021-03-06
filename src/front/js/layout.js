import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { RegisterPage } from "./pages/registerPage";
import Client from "./pages/client";
import Footer from "./component/footer";
import Supplier from "./pages/supplier";
import Product from "./pages/product";
import { Bills } from "./pages/bills";
import ListBills from "./pages/listBill";
import BillDetail from "./pages/billdetail";

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
							<RegisterPage />
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
						<Route exact path="/bills">
							<Bills />
						</Route>
						<Route exact path="/listBills">
							<ListBills />
						</Route>
						<Route exact path="/billDetail/:id">
							<BillDetail />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
