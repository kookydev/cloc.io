import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import TimeTable from "./components/user/Rota_Timesheet/TimeTable";
import LoginView from "./views/user/LoginView";
import AddUserView from "./views/user/AddUserView";
import "./App.css";

class App extends Component {
  state = {
    forename: null,
    surname: null,
    username: null,
    password: null,
    auth_lvl: 2,
    job_role: null,
    manager: null
  };

  createUser = () => {
    return fetch(`http://localhost:5000/createuser`, {
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        forename: this.state.forename,
        surname: this.state.surname,
        username: this.state.username,
        password: this.state.password,
        auth_lvl: this.state.auth_lvl,
        job_role: this.state.job_role,
        manager: this.state.manager
      })
    });
  };

  compareDB = e => {
    e.preventDefault();

    let id = this.state.username;
    let password = this.state.password;

    return fetch(`http://localhost:5000/createuser/${id}&${password}`)
      .then(response => {
        // console.log(response)
        return response.json();
      })
      .then(myJson => {
        return JSON.stringify(myJson);
      })
      .then(data => {
        let returnData = JSON.parse(data);
        console.log(returnData[0]);
      });

    // return console.log(this.state.username);
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const addUserView = props => {
      return (
        <AddUserView
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          createUser={this.createUser}
          value={this.state.value}
        />
      );
    };

    const loginView = props => {
      return (
        <LoginView
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          compareDB={this.compareDB}
          value={this.state.value}
        />
      );
    };

    return (
      <div className="App">
        <Router>
          <Route path="/createuser" render={addUserView} />
          <Route path="/login" render={loginView} />
        </Router>
      </div>
    );
  }
}

export default App;
