import React from "react";
import "./cantidadProductos.css";
import { useState, useEffect } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClipboardList} from "@fortawesome/free-solid-svg-icons";

export const CantidadProductos = () => {
	
	const [productos,setProductos] = useState([]) 

	useEffect(()=>{
		fetch('http://localhost:3010/api/products')
		.then(response => response.json())
		.then(data => {
			setProductos(data.count)
		})
	},[])

	return (
		<div>
			<div class=" mb-4 primero">
				<div class="left-blue border-5 blue-border rounded-3 shadow h-100 p-4">
					<div class="card-body">
						<div class="row no-gutters align-items-center">
							<div class="col mr-2">
								<div class="text-xs fw-bold blue text-uppercase mb-1">
									{" "}
									Cantidad de rodados
								</div>
								<div class="h5 mb-0 fw-bold text-muted">{productos}</div>
							</div>
							<div class="col-auto text-secondary">
								<FontAwesomeIcon icon={faClipboardList} size="2xl" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
