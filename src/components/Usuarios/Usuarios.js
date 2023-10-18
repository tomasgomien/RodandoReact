import React from "react";
import "./usuarios.css";
import { useState, useEffect } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCheck} from "@fortawesome/free-solid-svg-icons";

export const Usuarios = () => {
	
	const [usuarios,setUsuarios] = useState([]) 

	useEffect(()=>{
		fetch('http://localhost:3010/api/users')
		.then(response => response.json())
		.then(data => {
			setUsuarios(data.count)
		})
	},[])
	
	return (
		<div>
			<div class=" mb-4">
				<div class="border-start border-5 border-warning rounded-3 shadow h-100 p-4">
					<div class="card-body">
						<div class="row no-gutters align-items-center">
							<div class="col mr-2">
								<div class="text-xs fw-bold text-warning text-uppercase mb-1">Usuarios</div>
								<div class="h5 mb-0 fw-bold text-muted">{usuarios}</div>
							</div>
							<div class="col-auto text-secondary">
								<FontAwesomeIcon icon={faUserCheck} size="2xl" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
