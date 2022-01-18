import React, { useState } from "react";

const Footer = () => {
	const [dropend, setDropend] = useState(false);
	return (
		<footer className="mt-5 bg-bluedark-investy">
			<p className="text-center text-white m-0 mb-2 pt-2">
				Developed by Investy &copy; 2022 -
				<a className="aviso-legal" href="#">
					&nbsp;Aviso legal
				</a>{" "}
			</p>
			<div className="col-12 pb-2">
				<div className="social-buttons d-flex justify-content-center">
					<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
						<button
							className="navbar-toggler social-buttons__button social-button social-button--instagram"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<i className="fab fa-instagram fs-5" />
						</button>
					</a>
					<a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
						<button
							className="navbar-toggler social-buttons__button social-button social-button--twitter"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<i className="fab fa-twitter fs-5" />
						</button>
					</a>
					<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
						<button
							className="navbar-toggler social-buttons__button social-button social-button--facebook"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<i className="fab fa-facebook fs-5" />
						</button>
					</a>
					<a href="https://mail.google.com/mail/u/0/" target="_blank" rel="noopener noreferrer">
						<button
							className="navbar-toggler social-buttons__button social-button social-button--mail"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<i className="fas fa-envelope fs-5" />
						</button>
					</a>
					<a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
						<button
							className="navbar-toggler social-buttons__button social-button social-button--youtube"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<i className="fab fa-youtube fs-5" />
						</button>
					</a>
					<a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
						<button
							className="navbar-toggler social-buttons__button social-button social-button--linkedin"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<i className="fab fa-linkedin-in fs-5" />
						</button>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
