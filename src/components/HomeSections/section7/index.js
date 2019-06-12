import  React from 'react';
const OurStory =() => {
    return (
        <section className="section_gap story_area">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-7">
					<div className="main_title">
						<h2>Our latest Story</h2>
						<p>
							Open lesser winged midst wherein may morning
						</p>
					</div>
				</div>
			</div>
			<div className="row">
				{/* <!-- single-story --> */}
				<div className="col-lg-4 col-md-6">
					<div className="single-story">
						<div className="story-thumb">
							<img className="img-fluid" src="img/story/s1.jpg" alt=""/>
						</div>
						<div className="story-details">
							<div className="story-meta">
								<a href="#">
									<span className="lnr lnr-calendar-full"></span>
									20th Sep, 2018
								</a>
								<a href="#">
									<span className="lnr lnr-book"></span>
									Company
								</a>
							</div>
							<h5>
								<a href="#">
									Lime recalls electric scooters over 
									battery fire.
								</a>
							</h5>
						</div>
					</div>
				</div>

				{/* <!-- single-story --> */}
				<div className="col-lg-4 col-md-6">
					<div className="single-story">
						<div className="story-thumb">
							<img className="img-fluid" src="img/story/s2.jpg" alt=""/>
						</div>
						<div className="story-details">
							<div className="story-meta">
								<a href="#">
									<span className="lnr lnr-calendar-full"></span>
									20th Sep, 2018
								</a>
								<a href="#">
									<span className="lnr lnr-book"></span>
									Company
								</a>
							</div>
							<h5>
								<a href="#">
									Apple resorts to promo deals 
									trade to boost 
								</a>
							</h5>
						</div>
					</div>
				</div>

				{/* <!-- single-story --> */}
				<div className="col-lg-4 col-md-6">
					<div className="single-story">
						<div className="story-thumb">
							<img className="img-fluid" src="img/story/s3.jpg" alt=""/>
						</div>
						<div className="story-details">
							<div className="story-meta">
								<a href="#">
									<span className="lnr lnr-calendar-full"></span>
									20th Sep, 2018
								</a>
								<a href="#">
									<span className="lnr lnr-book"></span>
									Company
								</a>
							</div>
							<h5>
								<a href="#">
									Lime recalls electric scooters over 
									battery fire.
								</a>
							</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}

export default OurStory;