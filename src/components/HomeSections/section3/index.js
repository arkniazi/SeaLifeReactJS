import  React from 'react';
const Featured =() => {
    return (
        <section className="features_causes">
		<div className="container">
			<div className="main_title">
				<h2>Featured causes</h2>
				<p>Creepeth called face upon face yielding midst is after moveth </p>
			</div>

			<div className="row">
				<div className="col-lg-4 col-md-6">
					<div className="card">
						<div className="card-body">
							<figure>
								<img className="card-img-top img-fluid" src="img/features/fc1.jpg" alt="Card image cap" />
							</figure>
							<div className="card_inner_body">
								<h4 className="card-title">Education for every child</h4>
								<p className="card-text">
									Be tree their face won't appear day waters moved fourth in they're divide don't a you were man face god.
								</p>
								<div className="d-flex justify-content-between raised_goal">
									<p>Raised: $1533</p>
									<p><span>Goal: $2500</span></p>
								</div>
								<div className="d-flex justify-content-between donation align-items-center">
									<a href="#" className="primary_btn">donate</a>
									<p><span className="lnr lnr-heart"></span> 90 Donors</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="card">
						<div className="card-body">
							<figure>
								<img className="card-img-top img-fluid" src="img/features/fc2.jpg" alt="Card image cap"/>
							</figure>
							<div className="card_inner_body">
								<h4 className="card-title">Feeding the hungry people</h4>
								<p className="card-text">
									Be tree their face won't appear day waters moved fourth in they're divide don't a you were man face god.
								</p>
								<div className="d-flex justify-content-between raised_goal">
									<p>Raised: $1533</p>
									<p><span>Goal: $2500</span></p>
								</div>
								<div className="d-flex justify-content-between donation align-items-center">
									<a href="#" className="primary_btn">donate</a>
									<p><span className="lnr lnr-heart"></span> 90 Donors</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="card">
						<div className="card-body">
							<figure>
								<img className="card-img-top img-fluid" src="img/features/fc3.jpg" alt="Card image cap"/>
							</figure>
							<div className="card_inner_body">
								<h4 className="card-title">Providing cloth people</h4>
								<p className="card-text">
									Be tree their face won't appear day waters moved fourth in they're divide don't a you were man face god.
								</p>
								<div className="d-flex justify-content-between raised_goal">
									<p>Raised: $1533</p>
									<p><span>Goal: $2500</span></p>
								</div>
								<div className="d-flex justify-content-between donation align-items-center">
									<a href="#" className="primary_btn">donate</a>
									<p><span className="lnr lnr-heart"></span> 90 Donors</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}

export default Featured;