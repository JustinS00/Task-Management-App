import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
	render() {
		return(
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
  			<div className="container-fluid">
        		<Link to="/" className="btn custom-button">
        			<button type="button" className="btn btn-light">About Us</button>
        		</Link>
        		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      				<span className="navbar-toggler-icon"></span>
    			</button>

    			<div className="collapse navbar-collapse" id="navbarSupportedContent">
      				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
        				<li className="nav-item">
        					<Link to="/tasks" className="btn custom-button">
        						Tasks
        					</Link>
        				</li>
        				<li className="nav-item">
        					<Link to="/tasks/new" className="btn custom-button">
        						New task
        					</Link>
        				</li>
      				</ul>
    			</div>
  			</div>
		</nav>
		);
	}
}

export default Navbar;
