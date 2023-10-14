import React from 'react';
import './principal.css'
import './bootstrap.css'

function Login(){
    return(
        <div className='cajita'>
            <head>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Corporate Dashboard - Admin</title>
      
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"/>
            </head>
            
				<div class="container-fluid contenedor">

					
					<div class="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 class="h3 mb-0 text-gray-800">Rodando Dashboard</h1>
					</div>

					
					<div class="row">

						
						<div class="col-md-4 mb-4 primero">
							<div class="card border-left-primary shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="text-xs font-weight-bold text-primary text-uppercase mb-1"> Cantidad de productos</div>
											<div class="h5 mb-0 font-weight-bold text-gray-800">135</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-md-4 mb-4 ultimo">
							<div class="card border-left-success shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="text-xs font-weight-bold text-success text-uppercase mb-1"> Categorias</div>
											<div class="h5 mb-0 font-weight-bold text-gray-800">10</div>
										</div>
										<div class="col-auto">
                                            <i class="fas fa-bicycle fa-2x text-gray-300"></i>
											
										</div>
									</div>
								</div>
							</div>
						</div>

						
						<div class="col-md-4 mb-4">
							<div class="card border-left-warning shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Usuarios
											</div>
											<div class="h5 mb-0 font-weight-bold text-gray-800">38</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-user-check fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="row">
						
						<div class="col-lg-6 mb-4">
							<div class="card shadow mb-4">
								<div class="card-header py-3">
									<h6 class="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
								</div>
								<div class="card-body">
									<div class="text-center">
										<img class="img-fluid px-3 px-sm-4 mt-3 mb-4" src="assets/images/product_dummy.svg" alt="dummy"/>
									</div>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
									<a target="_blank" rel="nofollow" href="/">View product detail</a>
								</div>
							</div>
						</div>

						<div class="col-lg-6 mb-4">						
							<div class="card shadow mb-4">
								<div class="card-header py-3">
									<h6 class="m-0 font-weight-bold text-primary">Categorias de Rodados</h6>
								</div>
								<div class="card-body">
									<div class="row">
										<div class="col-lg-6 mb-4">
											<div class="card bg-info text-white shadow">
												<div class="card-body">
													Category 01
												</div>
											</div>
										</div>
										<div class="col-lg-6 mb-4">
											<div class="card bg-info text-white shadow">
												<div class="card-body">
													Category 02
												</div>
											</div>
										</div>
										<div class="col-lg-6 mb-4">
											<div class="card bg-info text-white shadow">
												<div class="card-body">
													Category 03
												</div>
											</div>
										</div>
										<div class="col-lg-6 mb-4">
											<div class="card bg-info text-white shadow">
												<div class="card-body">
													Category 04
												</div>
											</div>
										</div>
										<div class="col-lg-6 mb-4">
											<div class="card bg-info text-white shadow">
												<div class="card-body">
													Category 05
												</div>
											</div>
										</div>
										<div class="col-lg-6 mb-4">
											<div class="card bg-info text-white shadow">
												<div class="card-body">
													Category 06
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
        </div>
    )
}

export default Login;