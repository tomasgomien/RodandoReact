import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./contenedorProductos.css";
import {UltimoProdAgregado} from "../UltimoProdAgregado/UltimoProdAgregado";
import {CategoriasRodados} from "../CategoriasRodados/CategoriasRodados";

export const ContenedorProductos = () => {
	return (
		<Container fluid="xl" className="">
			<Row>
				<Col xs={12} md={6} lg={true}>
					<UltimoProdAgregado />
				</Col>
				<Col xs={12} md={6} lg={true}>
					<CategoriasRodados />
				</Col>
			</Row>
		</Container>
	);
};
