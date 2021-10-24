import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
	return (
		<div className="nav">
			<div className="nav-heading">
				<h1>User Fetcher</h1>
			</div>
			<div className="user-btn">
				<button onClick={props.onClick}>Get Users</button>
			</div>
		</div>
	);
};

export default Navbar;
