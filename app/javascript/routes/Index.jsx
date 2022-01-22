import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import UserGuide from "../components/UserGuide"
import Tasks from "../components/Tasks";
import Task from "../components/Task";
import NewTask from "../components/NewTask";
import EditTask from "../components/EditTask";



export default (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/userguide" exact component={UserGuide} />
          <Route path="/tasks" exact component={Tasks} />
          <Route path="/tasks/new" exact component={NewTask} />
          <Route path="/tasks/:id" exact component={Task} />
          <Route path="/tasks/:id/edit" exact component={EditTask} />
        </Switch>
      </Router>
);
