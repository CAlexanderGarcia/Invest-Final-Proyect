import React from "react";
import { Link } from "react-router-dom";
import Client from "components/client";
import Product from "components/product";
import Supplier from "components/supplier"


export const NavbarSecond = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container navigation ">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 jaf">JAF</span>
				</Link>
				<div className="">
					<nav className="navbar navbar-expand-sm navbar-light bg-light">
						<div className="container-fluid">

							<Link to="/client" className="btn buttom-nsi fs-5 me-4">
                                    <span id="span9" />
                                    <span id="span10" />
                                    <span id="span11" />
                                    <span id="span12" />
								<Client />
							</Link>
                            <Link to="/product" className="btn buttom-nsi fs-5 me-4">
                            <span id="span9" />
                                    <span id="span10" />
                                    <span id="span11" />
                                    <span id="span12" />
                                    <Product />
							</Link>
                            <Link to="/supplier" className="btn buttom-nsi fs-5 me-4">
                            <span id="span9" />
                                    <span id="span10" />
                                    <span id="span11" />
                                    <span id="span12" />
                                    <Supplier />
							</Link>
				
						</div>
					</nav>
				</div>
			</div>
		</nav>
	);
};