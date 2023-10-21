import React from "react";
import "./ultimoProdAgregado.css";
import {useState, useEffect} from "react";
import {Cargando} from "../Cargando/Cargando";

export const UltimoProdAgregado = () => {
	const [producto, setProducto] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3010/api/categories")
			.then((response) => response.json())
			.then((data) => {
				if (data.length > 0) {
					const productoConMayorId = data.reduce((maxProducto, producto) => {
						return producto.id > maxProducto.id ? producto : maxProducto;
					});
					setProducto(productoConMayorId);
				}
			});
	}, []);

	return (
		<div>
			<div class=" pe-0">
				<div class="card shadow  ">
					<div class="card-header py-3">
						<h6 class="m-0 fw-bold blue">Ultimo Producto agregado</h6>
					</div>
					<div class="card-body ">
						{producto.length === 0 && <Cargando />}
						<div class="text-center">
							<img
								class="img-size px-3 px-sm-4 mt-3"
								src={`https://res.cloudinary.com/dkguig17n/image/upload/v1691785191/${producto.imagen}.jpg`}
								alt=""
							/>
						</div>
						<p>
							<b>{producto.nombre}</b>
						</p>

						<p>{producto.descripcion}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
