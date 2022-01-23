import React from "react";
import { Link } from "react-router-dom";
import Moment from 'react-moment';
import Navbar from './Navbar';


class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "default",
      tasks: [], 
      searchTerm: "" 
    };
  }


  componentDidMount() {
      const url = "/api/v1/tasks";
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ tasks: response }))
        .catch(() => this.props.history.push("/"));
  }

/**
 * onSort = sortBy => {
    this.setState({sortBy});
  }

  onSearch = searchTerm => {
    this.setState({searchTerm});
  }
  */

  onSearch(searchTerm) {
    this.setState({searchTerm});
  }

  onSort(sortBy) {
    this.setState({sortBy});
  }


  render() {
    const { sortBy, tasks, searchTerm} = this.state;
    

    const IMPORTANCE_CODE = {
      "Low" : 0,
      "Fair" : 1,
      "High" : 2,
      "Critical" : 3
    }

    const STATUS_CODE = {
      "Completed" : 0,
      "Reviewing" : 1,
      "Ongoing" : 2,
    }

    const sortedTasks = tasks.sort((a,b) => 
    { 
      if (sortBy === "default") {
        return a.id - b.id;
      } else if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "status") {
        return STATUS_CODE[b.status] - STATUS_CODE[a.status];
      } else if (sortBy === "importance") {
        return IMPORTANCE_CODE[b.importance] - IMPORTANCE_CODE[a.importance];
      } else if (sortBy === "deadline") {
        if (b.deadline === null) {
          return -1;
        } else if (a.deadline === null) {
          return 1;
        } else {
          return a.deadline > b.deadline ? 1 : -1 ;
        }
      } else {
        return 1;
      } 
    });


    const allTasks = sortedTasks
                    .filter(task => task.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((task, index) => (

      <div key={index} className="col-md-9 col-lg-4">
        <div className="card text-dark bg-light mb-3">
          <div className="card-header">
            <h4 className="card-title" >{task.name}</h4>
          </div>
          <div className="card-body">
            <h6> Status: {task.status}</h6>
            <h6> Importance: {task.importance}</h6>
            <h6> Deadline: {
              <Moment format="DD MMM YYYY">
                {task.deadline}
              </Moment>
            }
            </h6>
          </div>
          <Link to={`/tasks/${task.id}`} className="btn custom-button">
            <button type="button" className="btn btn-success">
              <i class="bi bi-search"></i>
              <span> View Task </span>
            </button>
          </Link>
        </div>
      </div>  
    ));

    const noTask = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No tasks yet. Create one <Link to="/tasks/new">here</Link>
        </h4>
      </div>
    );


    return (
      <div className="py-2">
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-2">
            <Navbar />
          </div>
        </section>

        <div className="py-4">
          <main className="container">
            <div className="row" style={{ display: "flex" }}>
              <form className="col-sm-12 col-lg-3 d-flex">
                <input type = "text" placeholder="Search" style = {{fontSize: '20px'}} onChange={(event)=>{this.onSearch(event.target.value);}}></input>
              </form>

              <div className="col-sm-12 col-md-12 col-lg-1 d-flex" style={{ marginLeft: "auto" }}>
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-sort-down"></i>
                    <span> Sort </span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" onClick={() => this.onSort("default")}>Default</a></li>
                    <li><a className="dropdown-item" onClick={() => this.onSort("name")}>Name</a></li>
                    <li><a className="dropdown-item" onClick={() => this.onSort("status")}>Status</a></li>
                    <li><a className="dropdown-item " onClick={() => this.onSort("importance")}>Importance</a></li>
                    <li><a className="dropdown-item" onClick={() => this.onSort("deadline")}>Deadline</a></li>
                  </ul>
              </div>
            </div>

            <br></br>

            <div className="row">
              {allTasks.length > 0 ? allTasks : noTask}
            </div>

            <div className="col-sm-12 col-lg-3">
              <Link to="/tasks/new" className="btn custom-button">
                <button type="button" class="btn btn-primary">
                  <i class="bi bi-journal-plus"></i>
                  <span> Create A New Task </span>
                </button>
              </Link>
            </div>
          </main>
        </div>
      </div>
    );
  }

}
export default Tasks;
