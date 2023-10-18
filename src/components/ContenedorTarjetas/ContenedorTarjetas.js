import React from "react";
import "./contenedorTarjetas.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Usuarios} from "../Usuarios/Usuarios";
import {CantidadProductos} from "../CantidadProductos/CantidadProductos";
import {Categorias} from "../Categorias/Categorias";

export const ContenedorTarjetas = () => {
	return (
		<Container fluid="md">
			<Row>
				<Col xs={12} md={6} lg={true}>
					<Usuarios />
				</Col>
				<Col xs={12} md={6} lg={true}>
					<CantidadProductos />
				</Col>
				<Col xs={12} md={6} lg={true}>
					<Categorias />
				</Col>
			</Row>
		</Container>
	);
};
