import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
		<div className="container-fluid">
			<a className="navbar-brand text-white" href="#"><img src="../4geeks.ico" width="30" height="30" className="align-top me-2"/>Navbar</a>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav ms-auto">
				<li className="nav-item">
				<a className="nav-link active text-info" aria-current="page" href="#">Home</a>
				</li>
				<li className="nav-item">
				<a className="nav-link text-info" href="#">Features</a>
				</li>
				<li className="nav-item">
				<a className="nav-link text-info" href="#">Pricing</a>
				</li>
				<li className="nav-item">
				<a className="nav-link disabled" aria-disabled="true">Disabled</a>
				</li>
			</ul>
			</div>
		</div>
		</nav>
    );
};

export default Navbar;