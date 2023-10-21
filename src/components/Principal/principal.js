import React from "react";
import "./principal.css";
import {ContenedorTarjetas} from "../ContenedorTarjetas/ContenedorTarjetas";
import {ContenedorProductos} from "../ContenedorProductos/ContenedorProductos";

//import "./bootstrap.css";

function Principal() {
	const myModal = document.getElementById("staticBackdrop");
	const myInput = document.getElementById("myInput");

	return (
		<div className="mainContainer container-fluid">
			<div class="row ">
				<ContenedorTarjetas />
				<ContenedorProductos />
			</div>
		</div>
	);
}

export default Principal;
