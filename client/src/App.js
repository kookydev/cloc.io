<<<<<<< HEAD
import React, { Component } from "react";
import TimeTable from "./components/user/Rota_Timesheet/TimeTable";
import UserData from "./data/posts";
import "./App.css";

class App extends Component {
  state = { currentUser: 2 };
  render() {
    return (
      <div className="App">
        <StaffOverview staffData={UserData} />
=======
import React, { Component } from 'react';
import RotaTimesheet from './components/user/RotaTimesheet/RotaTimesheet';
import './App.css';

class App extends Component {
  state={
    currentUser: 2,
    rotaOrTimes: "rota"
  }
  
  render() {
    return (
      <div className="App">
              <RotaTimesheet userid={this.state.currentUser} rotaOrTimes={this.state.rotaOrTimes}/>

>>>>>>> ab463d8f07123c1ac8ab4a78247f34572b56f31a
      </div>
    );
  }
}

export default App;