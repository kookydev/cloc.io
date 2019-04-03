import React, { Component } from "react";

// import TimeTable from "./components/user/Rota_Timesheet/TimeTable";
import Login from "./components/user/LogIn/Login";
// import AddUser from './components/user/AddUser/AddUser';
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

    return fetch(`http://localhost:5000/user`, {
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

  compareDB = (e)  => {
    e.preventDefault()

    let id = this.state.username
    let password = this.state.password

    return (fetch(`/user/${id}/${password}`)
      .then(response => {
        console.log(response)
        // return response.json()
      })
      .then(myJson => {
        
        console.log( JSON.stringify(myJson))
      })
      // .then (data => {
      //   let returnData = JSON.stringify(data)
      // })
      )
    
    // return console.log(this.state.username);
  }
  
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        {/* <TimeTable userid={this.state.currentUser} /> */}
        <Login compareDB={this.compareDB} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        {/* <AddUser handleChange={this.handleChange} handleSubmit={this.handleSubmit} createUser={this.createUser} value={this.state.value}/> */}
      </div>
    );
  }
}

export default App;
