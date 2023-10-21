import React, {useState, useEffect} from "react";
import "./categoriasRodados.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {Cargando} from "../Cargando/Cargando";

export const CategoriasRodados = () => {
	const [categorias, setCategorias] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3010/api/categories")
			.then((response) => response.json())
			.then((data) => {
				setCategorias(data);
			});
	}, []);

	// estado para controlar la visibilidad de los modales
	const [vistasModal, setVistasModal] = useState({});

	const handleShowModal = (categoria) => {
		// copia del estado de vistasModal
		const nuevaVistaModal = {...vistasModal};

		nuevaVistaModal[categoria.id] = true;
		setVistasModal(nuevaVistaModal);
	};

	const handleCloseModal = (categoria) => {
		//  copia del estado de vistasModal
		const nuevaVistaModal = {...vistasModal};
		// se establece el modal correspondiente a false
		nuevaVistaModal[categoria.id] = false;
		setVistasModal(nuevaVistaModal);
	};

	return (
		<div className=" mb-4 pe-0">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h6 className="m-0 fw-bold blue">Categorias de Rodados</h6>
				</div>
				<div className="card-body">
					<div className="row">
						{categorias.length === 0 && <Cargando />}
						{categorias.map((cat, i) => (
							<div className="col-lg-6 mb-4" key={cat.id}>
								<div className="color-back card  text-white shadow ">
									<div className="card-body">{cat.nombre}</div>
									<Button variant="success" onClick={() => handleShowModal(cat)}>
										Mostrar información adicional
									</Button>
									<ModalCentrado
										datos={cat}
										show={vistasModal[cat.id] || false}
										onHide={() => handleCloseModal(cat)}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

const ModalCentrado = (props) => {
	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">{props.datos.nombre}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>
					<b>Categoria:</b> {props.datos.categ}
				</p>
				<p>
					<b>Id:</b> {props.datos.id}
				</p>
				<p>
					<b>Fecha creación:</b> {props.datos.fecha_creacion}
				</p>
				<p>
					<b>Rodado número:</b> {props.datos.rodado}
				</p>
				<p>
					<b>Precio por hora:</b> ${props.datos.precio_hora}
				</p>
				<img
					class="img-rodado img-thumbnail shadow"
					alt="rodado"
					src={`https://res.cloudinary.com/dkguig17n/image/upload/v1691785191/${props.datos.imagen}.jpg`}
				/>
				<p>
					<b>Descripción: </b>
					{props.datos.descripcion}
				</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Cerrar</Button>
			</Modal.Footer>
		</Modal>
	);
};
