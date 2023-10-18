import React from "react";
import "./categorias.css";
import { useState, useEffect } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBicycle, faClipboardList} from "@fortawesome/free-solid-svg-icons";

export const Categorias = () => {

	const [categorias,setCategorias] = useState([]) 

	useEffect(()=>{
		fetch('http://localhost:3010/api/categories')
		.then(response => response.json())
		.then(data => {
			setCategorias(data.length)
		})
	},[])

	return (
		<div>
			<div class=" mb-4 ultimo">
				<div class="border-start border-5 border-success rounded-3 shadow h-100 p-4">
					<div class="card-body">
						<div class="row no-gutters align-items-center">
							<div class="col mr-2">
								<div class="text-xs fw-bold text-success text-uppercase mb-1"> Categorias</div>
								<div class="h5 mb-0 fw-bold text-muted">{categorias}</div>
							</div>
							<div class="col-auto text-secondary">
								<FontAwesomeIcon icon={faBicycle} size="2xl" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
