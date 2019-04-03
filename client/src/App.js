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
      </div>
    );
  }
}

export default App;
