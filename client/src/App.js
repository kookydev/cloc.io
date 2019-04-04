import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import TimeTable from "./components/user/Rota_Timesheet/TimeTable";
import LoginView from "./views/user/LoginView";
import HomeScreenView from "./views/user/HomeScreenView";
import AddUserView from "./views/user/AddUserView";
import "./App.css";

// import NotificationCont from './components/user/Notifications/NotificationCont'

class App extends Component {
  state = {
    forename: null,
    surname: null,
    username: null,
    password: null,
    auth_lvl: null,
    job_role: null,
    manager: null,
    currentUser: 3,
    rotaOrTimes: "rota"
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
        this.setState({ forename: returnData[0].forename, surname: returnData[0].surname, username: returnData[0].username, password: returnData[0].password, auth_lvl: returnData[0].auth_lvl, job_role: returnData[0].job_role, manager: returnData[0].manager });
        console.log(this.state.auth_lvl);
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

    const homeScreenView = props => {
      return <HomeScreenView auth_lvl={this.state.auth_lvl} />;
    };

    return (
      <div className="App">
        <Router>
          <Route path="/home" render={homeScreenView} />
          <Route path="/createuser" render={addUserView} />
          <Route path="/login" render={loginView} />
        </Router>

        {/* <NotificationCont/>  */}
      </div>
    );
  }
}

export default App;
