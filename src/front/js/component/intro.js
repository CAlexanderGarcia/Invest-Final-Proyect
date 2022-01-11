import React from "react";
import jumbo01 from "../../img/jumbo01.png";

const Intro = () => {
	return (
		<div>
			<div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#myCarousel"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					/>
					<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" />
					<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" />
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<svg
							className="bd-placeholder-img"
							width="100%"
							height="100%"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							preserveAspectRatio="xMidYMid slice"
							focusable="false">
							<rect width="100%" height="100%" fill="#777" />
						</svg>

						<div className="container">
							<div className="carousel-caption text-start">
								<h1>Example headline.</h1>
								<p>Some representative placeholder content for the first slide of the carousel.</p>
								<p>
									<a className="btn btn-lg btn-primary" href="#">
										Sign up today
									</a>
								</p>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<svg
							className="bd-placeholder-img"
							width="100%"
							height="100%"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							preserveAspectRatio="xMidYMid slice"
							focusable="false">
							<rect width="100%" height="100%" fill="#777" />
						</svg>

						<div className="container">
							<div className="carousel-caption">
								<h1>Another example headline.</h1>
								<p>Some representative placeholder content for the second slide of the carousel.</p>
								<p>
									<a className="btn btn-lg btn-primary" href="#">
										Learn more
									</a>
								</p>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<svg
							className="bd-placeholder-img"
							width="100%"
							height="100%"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							preserveAspectRatio="xMidYMid slice"
							focusable="false">
							<rect width="100%" height="100%" fill="#777" />
						</svg>

						<div className="container">
							<div className="carousel-caption text-end">
								<h1>One more for good measure.</h1>
								<p>Some representative placeholder content for the third slide of this carousel.</p>
								<p>
									<a className="btn btn-lg btn-primary" href="#">
										Browse gallery
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#myCarousel"
					data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#myCarousel"
					data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="visually-hidden">Next</span>
				</button>
			</div>

			<div className="container marketing">
				<div className="row">
					<div className="col-lg-4">
						<svg
							className="bd-placeholder-img rounded-circle"
							width="140"
							height="140"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="Placeholder: 140x140"
							preserveAspectRatio="xMidYMid slice"
							focusable="false">
							<title>Placeholder</title>
							<rect width="100%" height="100" fill="#777" />
							<text x="50%" y="50%" fill="#777" dy=".3em">
								140x140
							</text>
						</svg>

						<h2>Heading</h2>
						<p>
							Some representative placeholder content for the three columns of text below the carousel.
							This is the first column.
						</p>
						<p>
							<a className="btn btn-secondary" href="#">
								View details &raquo;
							</a>
						</p>
					</div>
					<div className="col-lg-4">
						<svg
							className="bd-placeholder-img rounded-circle"
							width="140"
							height="140"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="Placeholder: 140x140"
							preserveAspectRatio="xMidYMid slice"
							focusable="false">
							<title>Placeholder</title>
							<rect width="100%" height="100" fill="#777" />
							<text x="50%" y="50%" fill="#777" dy=".3em">
								140x140
							</text>
						</svg>

						<h2>Heading</h2>
						<p>
							Another exciting bit of representative placeholder content. This time, weve moved on to the
							second column.
						</p>
						<p>
							<a className="btn btn-secondary" href="#">
								View details &raquo;
							</a>
						</p>
					</div>
					<div className="col-lg-4">
						<svg
							className="bd-placeholder-img rounded-circle"
							width="140"
							height="140"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="Placeholder: 140x140"
							preserveAspectRatio="xMidYMid slice"
							focusable="false">
							<title>Placeholder</title>
							<rect width="100%" height="100" fill="#777" />
							<text x="50%" y="50%" fill="#777" dy=".3em">
								140x140
							</text>
						</svg>

						<h2>Heading</h2>
						<p>And lastly this, the third column of representative placeholder content.</p>
						<p>
							<a className="btn btn-secondary" href="#">
								View details &raquo;
							</a>
						</p>
					</div>
				</div>

				<hr className="featurette-divider" />

				<div className="row featurette">
					<div className="col-md-7">
						<h2 className="featurette-heading">
							First featurette heading. <span className="text-muted">Itll blow your mind.</span>
						</h2>
						<p className="lead">
							Some great placeholder content for the first featurette here. Imagine some exciting prose
							here.
						</p>
					</div>
					<div className="col-md-5">
						<img
							src={jumbo01}
							className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
							width="500"
							height="500"
							role="img"
						/>
					</div>
				</div>

				<hr className="featurette-divider" />

				<div className="row featurette">
					<div className="col-md-7 order-md-2">
						<h2 className="featurette-heading">
							Oh yeah, its that good. <span className="text-muted">See for yourself.</span>
						</h2>
						<p className="lead">
							Another featurette Of course. More placeholder content here to give you an idea of how this
							layout would work with some actual realworld content in place.
						</p>
					</div>
					<div className="col-md-5 order-md-1">
						<svg
							className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
							width="500"
							height="500"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="Placeholder: 500x500"
							preserveAspectRatio="xMidYMid slice"
							focusable="false">
							<title>Placeholder</title>
							<rect width="100%" height="100" fill="#eee" />
							<text x="50%" y="50%" fill="#aaa" dy=".3em">
								500x500
							</text>
						</svg>
					</div>
				</div>

				<hr className="featurette-divider" />

				<div className="row featurette">
					<div className="col-md-7">
						<h2 className="featurette-heading">
							And lastly, this one. <span className="text-muted">Checkmate.</span>
						</h2>
						<p className="lead">
							And yes, this is the last block of representative placeholder content. Again, not really
							intended to be actually read, simply here to give you a better view of what this would look
							like with some actual content. Your content.
						</p>
					</div>
					<div className="col-md-5">
						<svg
							className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
							width="500"
							height="500"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="Placeholder: 500x500"
							preserveAspectRatio="xMidYMid slice"
							focusable="false">
							<title>Placeholder</title>
							<rect width="100%" height="100" fill="#eee" />
							<text x="50%" y="50%" fill="#aaa" dy=".3em">
								500x500
							</text>
						</svg>
					</div>
				</div>

				<hr className="featurette-divider" />
			</div>
		</div>
	);
};

export default Intro;
