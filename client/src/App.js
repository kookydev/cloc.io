import React, { Component } from 'react';
import './App.css';

import HomeScreen from './components/user/HomeScreen/HomeScreen'
import NotificationCont from './components/user/Notifications/NotificationCont'

class App extends Component {
  state={
    currentUser: 3,
    rotaOrTimes: "rota",
  }
  
  
  render() {
    return (
      <div className="App">

      <HomeScreen authLevel={2} />
      <NotificationCont/> 

      </div>
    );
  }
}

export default App;