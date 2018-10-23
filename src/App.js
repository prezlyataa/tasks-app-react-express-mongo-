import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { LoginPage } from "./components/login-page";
import { TasksPage } from "./components/tasks-page";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/login" component={LoginPage} />
          <Route path="/tasks" component={TasksPage} />
        </div>
      </Router>
    );
  }
}

export default App;
