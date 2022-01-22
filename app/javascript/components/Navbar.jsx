import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
	render() {
		return(
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
  			<div className="container-fluid">
        		<Link to="/" className="btn custom-button lead" style = {{fontSize: '26px', fontWeight: '300', fontFamily: 'Roboto'}}>
        			<i class="bi bi-house-door"></i>
        			<span> Home </span>
        		</Link>

        		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      				<span className="navbar-toggler-icon"></span>
    			</button>

    			<div className="collapse navbar-collapse" id="navbarSupportedContent">
      				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
      				     <li className="nav-item">
        					<Link to="/userguide" className="btn custom-button lead" style = {{fontSize: '26px',  fontWeight: '300', fontFamily: 'Roboto'}}>
        						<i class="bi bi-book"></i>
        						<span> User Guide </span>
        					</Link>
        				</li>
        				<li className="nav-item">
        					<Link to="/tasks" className="btn custom-button lead " style = {{fontSize: '26px',  fontWeight: '300', fontFamily: 'Roboto'}}>
        						<i class="bi bi-list-task"></i>
        						<span> Tasks </span>
        					</Link>
        				</li>
        				<li className="nav-item">
        					<Link to="/tasks/new" className="btn custom-button lead" style = {{fontSize: '26px', fontWeight: '300', fontFamily: 'Roboto'}}>
								<i class="bi bi-journal-plus"></i>
								<span> New Task </span>
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
