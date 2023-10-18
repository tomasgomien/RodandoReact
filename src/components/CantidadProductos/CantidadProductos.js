import React from "react";
import "./cantidadProductos.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClipboardList} from "@fortawesome/free-solid-svg-icons";

export const CantidadProductos = () => {
	return (
		<div>
			<div class=" mb-4 primero">
				<div class="border-start border-5 border-primary rounded-3 shadow h-100 p-4">
					<div class="card-body">
						<div class="row no-gutters align-items-center">
							<div class="col mr-2">
								<div class="text-xs fw-bold text-primary text-uppercase mb-1">
									{" "}
									Cantidad de productos
								</div>
								<div class="h5 mb-0 fw-bold text-muted">135</div>
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
