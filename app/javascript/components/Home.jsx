import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Task Management Application</h1>
        <p className="lead">
          An application made to help you organise your work
        </p>
        <hr className="my-4" />
        <Link to="/tasks" className="btn" role="button">
          <button type="button" class="btn btn-secondary btn-lg">View</button>
        </Link>
      </div>
    </div>
  </div>
);