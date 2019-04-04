import React, { Component } from 'react';
import './App.css';

import HomeScreen from './components/user/HomeScreen/HomeScreen'
import NotificationCont from './components/user/Notifications/NotificationCont'

import ClockInOutCont from "./components/user/ClockInOut/ClockInOutCont"


class App extends Component {
  state={
    currentUser: 3,
    rotaOrTimes: "rota",
    auth: 1
  }
  
  
  render() {
    return (
      <div className="App">

      <HomeScreen authLevel={this.state.auth} />
      <NotificationCont/> 

      </div>
    );
  }
}

export default App;