import React from "react";
import { Link } from "react-router-dom"
import { TextField } from '@mui/material';
import Moment from 'react-moment';

export default function TaskForm(props) {
  //const [value, setValue] = React.useState(new Date());
  const [date, setDate] = React.useState(new Date());

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-lg-6 offset-lg-3">
          <h1 className="font-weight-normal mb-5">
            Add a new task
          </h1>
          <form onSubmit={props.onSubmit}>
            
            <div className="form-group">
              <TextField 
                id="filled-basic" 
                label="Name" 
                variant="filled" 
                type="text"
                name="name"
                value={props.task.name}
                className="form-control"
                required
                onChange={props.onChange}
              />
            </div>

            <br></br>

            <div className="form-group">
              <TextField 
                id="filled-basic" 
                label="Details" 
                variant="filled" 
                type="text"
                name="details"
                value={props.task.details}
                className="form-control"
                onChange={props.onChange}
              />
            </div>

            <br></br> 

            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="taskStatus">Status</label>
                <select 
                  type="text"
                  name="status"
                  value={props.task.status}
                  id="taskStatus"
                  className="form-select" 
                  onChange={props.onChange}
                  required
                >
                    <option defaultValue="Ongoing">Ongoing</option>
                    <option value="Reviewing">Reviewing</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>

            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="taskImportance">Importance</label>
                <select 
                  type="text"
                  name="importance"
                  value={props.task.importance}
                  id="taskImportance"
                  className="form-select" 
                  onChange={props.onChange}
                  required
                >
                    <option defaultValue="Critical">Critical</option>
                    <option value="High">High</option>
                    <option value="Fair">Fair</option>
                    <option value="Low">Low</option>
                </select>
            </div>

            <div className="form-group">
              <label htmlFor="taskDeadlineS">Deadline</label>
              
              <input
                type="date"
                name="deadline"
                data-date-format="DD MMMM YYYY"
                value={props.task.deadline}
                id="taskDeadline"
                className="form-control"
                onChange={props.onChange}
              />
            </div>
            
            <button type="submit" className="btn btn-primary mt-3">
              {props.button_label}
            </button>
            <Link to={props.cancel_action} className="btn btn-secondary ml-2 mt-3">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
