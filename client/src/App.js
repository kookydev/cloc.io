import React, { Component } from "react";
import RotaTimesheet from "./components/user/RotaTimesheet/RotaTimesheet";
import "./App.css";
import UserData from "./data/posts";
import StaffOverview from "./components/manager/StaffOverview/StaffOverview";

class App extends Component {
  state = {
    currentUser: 2,
    rotaOrTimes: "rota"
  };

  render() {
    return (
      <div className="App">
        <StaffOverview staffData={UserData} />
      </div>
    );
  }
}

export default App;
