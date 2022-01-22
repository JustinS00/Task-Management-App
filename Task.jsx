import React from "react";
import { Link } from "react-router-dom";
import Moment from 'react-moment';
import { Popconfirm, message } from 'antd';
import 'antd/dist/antd.css';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {task: {name: ""}};
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
          <div className="card-header" style = {{fontSize: '52px', fontWeight: '600',fontFamily: 'Roboto'}} > 
            {task.name}
          </div>

          <div className="card-body text-secondary">
            <h4 className="card-title">Details:</h4>
            <p className="card-text"  style = {{fontSize: '26px',  fontWeight: '300', fontFamily: 'Roboto'}} >{task.details}</p>

            <h4 className="card-title">Status:</h4>
            <p className="card-text" style = {{fontSize: '26px',  fontWeight: '300', fontFamily: 'Roboto'}} >{task.status}</p>

            <h4 className="card-title">Importance:</h4>
            <p className="card-text" style = {{fontSize: '26px',  fontWeight: '300', fontFamily: 'Roboto'}}>{task.importance}</p>

            <h4 className="card-title">Deadline:</h4>
            <p className="card-text"> 
              <Moment format="DD MMM YYYY" style = {{fontSize: '26px',  fontWeight: '300', fontFamily: 'Roboto'}}>
                {task.deadline}
              </Moment>
            </p>
          </div>  

        </div>

        <div className="container py-5">
          <div className="row">

            <div className="col-sm-12 col-lg-2">
              <Link to="/tasks" className="btn btn-primary mr-2">
                <i class="bi bi-box-arrow-in-left"></i>
                <span> Back </span>
              </Link>
            </div>

            <div className="col-sm-12 col-lg-2">
              <Link to={`/tasks/${this.props.match.params.id}/edit`} className="btn btn-warning mr-2">
                <i class="bi bi-pen-fill"></i>
                <span> Edit Task </span>
              </Link>
            </div>

            <div className="col-sm-12 col-lg-2">
              <Popconfirm title="Are you sure you would want to delete this task?" onConfirm={this.deletetask} okText="Yes" cancelText="No">
                <button type="button" className="btn btn-danger">
                  <i class="bi bi-trash"></i>
                  <span> Delete Task </span>
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