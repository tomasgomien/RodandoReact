import Spinner from "react-bootstrap/Spinner";
import "./cargando.css";

export const Cargando = () => {
	return (
		<div className="text-center">
			<Spinner animation="border" variant="danger" />

			{/* <Spinner animation="grow" variant="danger" /> */}
		</div>
	);
};
