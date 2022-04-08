import Button from '@mui/material/Button';
// import { Link, Redirect } from "react-router-dom";
import React, { useState } from "react";
import AvatarComponent from './Avatar';
import LoginProfile from './LoginProfile';
const NavBar = (props) => {
	const [loginMode, setLoginMode] = useState(false)
	const [mode, setMode] = useState(0)

	const handleContact = () => {
		setMode(3)
		props.modeChange(3);
	}

	const handleAbout = () => {
		setMode(4);
		props.modeChange(4);
	}

	const handlePricing = () => {
		setMode(5);
		props.modeChange(5);
	}

	const handleLogin = () => {
		setMode(0);
	}

	let navList;

	navList = (
		<ul className="nav-list">
			<li>
				<span onClick={handleContact} to="/contactUs" className={mode===3 ? "nav-link current" : "nav-link"}>
					Contact Us
				</span>
			</li>
			<li>
				<span onClick={handleAbout} to="/aboutUS" className={mode===4 ? "nav-link current" : "nav-link"}>
					About Us
				</span>
			</li>
			<li>
				<span onClick={handlePricing} to="/pricing" className={mode===5 ? "nav-link current" : "nav-link"}>
					Pricing
				</span>
			</li>
		</ul>
	)

	const handleClick = () => {
		const navList = document.querySelector('.nav-list');
		navList.classList.toggle('navbar-toggle');
	}

	return (

		<nav className="navbar">
			{/* Hamburger */}
			<span className="material-icons hamburger" onClick={handleClick}>menu</span>
			
			<h1 className="logo">
				Heal-Thy
			</h1>
			<>
				{navList /* Display menu */}
				{!loginMode ? <AvatarComponent modeChange={props.modeChange} loginMode={handleLogin}/> : <LoginProfile modeChange={props.modeChange} loginMode={handleLogin}/>}
			</>
		</nav>
	);
}

export default NavBar;