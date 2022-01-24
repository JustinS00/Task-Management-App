import React from "react";
import { Link } from "react-router-dom"
import { TextField } from '@mui/material';
import Moment from 'react-moment';

export default function TaskForm(props) {

  const [date, setDate] = React.useState(new Date());

  return (
    <div className="container py-4">
        <div>
          <h1 style = {{fontSize: '40px',  fontWeight: '450', fontFamily: 'Roboto'}}>
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
                inputProps={{style: {fontSize: '20px', fontWeight: '300'}}}
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
                inputProps={{style: {fontSize: '20px'}}}
              />
            </div>

            <br></br> 

            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="taskStatus" style = {{fontSize: '24px',  fontWeight: '450'}}>
                Status
              </label>
              <select 
                type="text"
                name="status"
                value={props.task.status}
                id="taskStatus"
                className="form-select" 
                onChange={props.onChange}
                required  
                style = {{fontSize: '20px',  fontWeight: '300'}}
              >
                <option defaultValue="Ongoing">Ongoing</option>
                <option value="Reviewing">Reviewing</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="taskImportance" style = {{fontSize: '24px',  fontWeight: '450'}}>
                Importance
              </label>
              <select 
                type="text"
                name="importance"
                value={props.task.importance}
                id="taskImportance"
                className="form-select" 
                onChange={props.onChange}
                required                  
                style = {{fontSize: '20px',  fontWeight: '300'}}
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
                value={props.task.deadline}
                id="taskDeadline"
                className="form-control"
                onChange={props.onChange}
                style = {{fontSize: '20px',  fontWeight: '300', fontFamily: 'Roboto'}}
              />
            </div>


            <div className="row">
              <div className="col-sm-12 col-lg-2">
                <button type="submit" className="btn btn-primary mt-3">
                  <i class="bi bi-save"></i>
                  <span> {props.button_label} </span>
                </button>
              </div>
              <div className="col-sm-12 col-lg-2">
                <Link to={props.cancel_action} className="btn btn-secondary ml-2 mt-3">
                  Cancel
                </Link>
              </div>
            </div>

          </form> 
        </div>
    </div>
  );
}
