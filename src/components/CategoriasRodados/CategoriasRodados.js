import React from "react";
import "./categoriasRodados.css";
import { useState, useEffect } from "react";

export const CategoriasRodados = () => {
	
	const [categorias,setCategorias] = useState([]) 

	useEffect(()=>{
		fetch('http://localhost:3010/api/categories')
		.then(response => response.json())
		.then(data => {
			setCategorias(data)
		})
	},[])
	
	return (
		<div>
			<div class=" mb-4 pe-0">
				<div class="card shadow mb-4 ">
					<div class="card-header py-3 ">
						<h6 class="m-0 fw-bold blue">Categorias de Rodados</h6>
					</div>
					<div class="card-body ">
						<div class="row">
							{categorias.map((cat,i) => 
							
							<div class="col-lg-6 mb-4">
								<div class="color-back card  text-white shadow ">
									<div class="card-body">{cat.nombre}</div>
								</div>
							</div> 
							
							)}		
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
