import React from "react";
import "./userCard.css";

function changeShadow(e) {
	e.target.style.boxShadow = "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px";
}

function revertShadow(e) {
	e.target.style.boxShadow =
		"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px";
}

const ProfileCard = ({ avatar, FirstName, LastName, email }) => {
	return (
		<div
			className="profileCard"
			onMouseEnter={changeShadow}
			onMouseLeave={revertShadow}
		>
			<div className="userImg">
				<img alt="profile" src={avatar} />
			</div>
			<h1>
				{FirstName}
				{LastName}
			</h1>
			<p>{email}</p>
		</div>
	);
};

export default ProfileCard;
