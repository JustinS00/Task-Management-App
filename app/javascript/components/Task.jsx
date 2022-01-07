import React from "react";
import { Link } from "react-router-dom";
import Moment from 'react-moment';
import { Popconfirm, message } from 'antd';
import 'antd/dist/antd.css';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {task: {name: ""}};
    this.addHtmlEntities = this.addHtmlEntities.bind(this);
    this.deletetask = this.deletetask.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const url = `/api/v1/tasks/${id}`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({task: response }))
      .catch(() => this.props.history.push("/tasks"));
  }

  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }

  deletetask() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const url = `/api/v1/tasks/${id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => this.props.history.push("/tasks"))
      .catch(error => console.log(error.message));
  }

  render() {
    const { task } = this.state;
    return (  
      <div className="container py-5">
        <div className="card border-secondary mb-3">
          <div className="card-header"> 
            <h1 className="display-4">{task.name}</h1>
          </div>
          <div className="card-body text-secondary">
            <h5 className="card-title">Details:</h5>
            <p className="card-text">{task.details}</p>

            <h5 className="card-title">Status:</h5>
            <p className="card-text">{task.status}</p>

            <h5 className="card-title">Importance:</h5>
            <p className="card-text">{task.importance}</p>

            <h5 className="card-title">Deadline:</h5>
            <p className="card-text"> 
              <Moment format="DD MMM YYYY">
                {task.deadline}
              </Moment>
            </p>

          </div>
        </div>

        <div className="container py-5">
          <div className="row">

            <div className="col-sm-12 col-lg-2">
              <Link to="/tasks" className="btn btn-primary mr-2">
                Back to tasks
              </Link>
            </div>

            <div className="col-sm-12 col-lg-2">
              <Link to={`/tasks/${this.props.match.params.id}/edit`} className="btn btn-warning mr-2">
                Edit Task
              </Link>
            </div>

            <div className="col-sm-12 col-lg-2">
              <Popconfirm title="Are you sure you would want to delete this task?" onConfirm={this.deletetask} okText="Yes" cancelText="No">
                <button type="button" className="btn btn-danger">
                  Delete Task
                </button>
              </Popconfirm>
            </div>

          </div> 
        </div>
      </div>
    );
  }
}

export default Task;