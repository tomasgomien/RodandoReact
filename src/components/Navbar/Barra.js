import React from "react";
import "./barra.css";
import logo from "./logo/logo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export const Barra = () => {
	return (
		<Navbar className="bg-secondary border-bottom border-5 border-warning mb-5">
			<Container fluid className="">
				<Navbar.Brand href="#home" className="">
					<img alt="" src={logo} width="170" height="45" className="ms-0 d-inline-block " />{" "}
				</Navbar.Brand>
				<div className="fw-bolder d-inline-block fs-3 text-center">Dashboard</div>
			</Container>
		</Navbar>
	);
};
