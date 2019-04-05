import React, { Component } from "react";
import "./App.css";
import "./components/user/LogIn/Login.css";
import HomeScreen from "./components/user/HomeScreen/HomeScreen";
import StaffDetails from "./components/manager/StaffDetails/StaffDetails";
import UserData from "./data/posts.json";
import StaffOverview from "./components/manager/StaffOverview/StaffOverview";
import NotificationCont from "./components/user/Notifications/NotificationCont";
import Login from "./components/user/LogIn/Login";

class App extends Component {
  state = {
    currentUser: 3,
    rotaOrTimes: "rota"
  };

  render() {
    return (
      <div className="App">
        {/* <RotaTimesheet
          userid={this.state.currentUser}
          rotaOrTimes={this.state.rotaOrTimes}
        /> */}
        <Login />
        {/* <HomeScreen authLevel={2} />
      <NotificationCont/>  */}
      </div>
    );
  }
}

export default App;
