import React from "react";
import "./ultimoProdAgregado.css";

export const UltimoProdAgregado = () => {
	return (
		<div>
			<div class=" pe-0">
				<div class="card shadow  ">
					<div class="card-header py-3">
						<h6 class="m-0 fw-bold text-primary">Last product in Data Dase</h6>
					</div>
					<div class="card-body ">
						<div class="text-center">
							<img
								class="img-fluid px-3 px-sm-4 mt-3 "
								src="assets/images/product_dummy.svg"
								alt="dummy"
							/>
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo
							officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam
							voluptatum non corporis quae dolorem culpa exercitationem ratione?
						</p>
						<a target="_blank" rel="nofollow" href="/">
							View product detail
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
