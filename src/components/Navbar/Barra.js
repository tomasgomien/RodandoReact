import React from "react";
import "./barra.css";
import logo from "./logo/logo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export const Barra = () => {
	return (
		<Navbar className="bottom-border border-5 mb-5 color">
			<Container fluid className="">
				<Navbar.Brand href="#home" className="">
					<img alt="" src={logo} width="210" height="45" className="ms-0 d-inline-block " />{" "}
				</Navbar.Brand>
				
			</Container>
		</Navbar>
	);
};
