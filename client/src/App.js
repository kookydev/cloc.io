
import React, { Component } from "react";
import RotaTimesheet from "./components/user/RotaTimesheet/RotaTimesheet";
import "./App.css";
import HomeScreen from "./components/user/HomeScreen/HomeScreen";
import StaffDetails from "./components/manager/StaffDetails/StaffDetails";
import UserData from "./data/posts.json";
import StaffOverview from "./components/manager/StaffOverview/StaffOverview";
import NotificationCont from "./components/user/Notifications/NotificationCont"

class App extends Component {
  state = {
    currentUser: 2,
    rotaOrTimes: "rota"
  };

  render() {
    return (
      <div className="App">

      <HomeScreen authLevel={2} />
      <NotificationCont /> 


      </div>
    );
  }
}

export default App;
