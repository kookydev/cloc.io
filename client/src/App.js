import React, { Component } from "react";
import "./App.css";

import HomeScreen from "./components/user/HomeScreen/HomeScreen";
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
        <Login />
        {/* <HomeScreen authLevel={2} />
      <NotificationCont/>  */}
      </div>
    );
  }
}

export default App;
