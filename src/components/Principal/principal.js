import React from "react";
import "./principal.css";
import {ContenedorTarjetas} from "../ContenedorTarjetas/ContenedorTarjetas";
import {ContenedorProductos} from "../ContenedorProductos/ContenedorProductos";

//import "./bootstrap.css";

function Principal() {
	return (
		<div className="mainContainer">
			<div class="row">
				<ContenedorTarjetas />
				<ContenedorProductos />
			</div>
		</div>
	);
}

export default Principal;
