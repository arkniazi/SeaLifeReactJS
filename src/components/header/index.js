import React from  "react";
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Header =()=>{
    return(
    <header className="header_area navbar_fixed">
		<div className="main_menu">
			<div className="container">
				<nav className="navbar navbar-expand-lg navbar-light">
					<div className="container">
						{/* <!-- Brand and toggle get grouped for better mobile display --> */}
						<a className="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""/></a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						{/* <!-- Collect the nav links, forms, and other content for toggling --> */}
						<div className="collapse navbar-collapse offset" id="navbarSupportedContent">
							<ul className="nav navbar-nav menu_nav ml-auto">
								<li className="nav-item active">
									<Link to={ROUTES.HOME}><a className="nav-link" href="">Home</a></Link></li> 
								<li className="nav-item"><Link to={ROUTES.ABOUT}><a className="nav-link" href="">About</a></Link></li> 
								<li className="nav-item"><Link to={ROUTES.CAUSE}><a className="nav-link" href="">Causes</a></Link></li>
								<li className="nav-item submenu dropdown">
									<a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
									<ul className="dropdown-menu">
										<li className="nav-item"><a className="nav-link" href="events.html">Events</a> </li>
										<li className="nav-item"><a className="nav-link" href="event-details.html">Event Details</a></li>
										<li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
									</ul>
								</li> 
								<li className="nav-item submenu dropdown">
									<a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
									<ul className="dropdown-menu">
										<li className="nav-item"><Link to={ROUTES.BLOG}><a className="nav-link" href="blog.html">Blog</a></Link></li>
										<li className="nav-item"><Link to={ROUTES.CONTACT}><a className="nav-link" href="single-blog.html">Blog Details</a></Link></li>
									</ul>
								</li> 
								<li className="nav-item"><Link to={ROUTES.CONTACT}><a className="nav-link" href="">Contact</a></Link></li>
							</ul>
						</div> 
					</div>
				</nav>
			</div>
		</div>
	</header>
	
    )}

export  default Header;