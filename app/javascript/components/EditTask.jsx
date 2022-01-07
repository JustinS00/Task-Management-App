import React from "react";
import { Link } from "react-router-dom";
import TaskForm from "./TaskForm";

class EditTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      details: "",
      importance: "Critical",
      status: "Ongoing",
      deadline: "",
      task_id: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }

  stripHtmlEntities(str) {
    return String(str)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const url = `/api/v1/tasks/${this.props.match.params.id}`;
    const { name, details,importance,status,deadline,task_id } = this.state;

    const body = {
        name,
        details,
        importance,
        status,
        deadline,
        task_id
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "PUT",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.props.history.push(`/tasks/${response.id}`))
      .catch(error => console.log(error.message));
  }

  componentDidMount() {
    const url = `/api/v1/tasks/${this.props.match.params.id}`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ ...response }))
      .catch(() => this.props.history.push("/tasks"));
  }

  render() {
    return (
      <TaskForm onSubmit={this.onSubmit} onChange={this.onChange} task={this.state} button_label="Update Task" cancel_action={`/tasks/${this.props.match.params.id}`} />
    );
  }
}

export default EditTask;
