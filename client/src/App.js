import React, { Component } from 'react';
import './App.css';
import HomeScreen from './components/user/HomeScreen/HomeScreen'
import NotificationCont from './components/user/Notifications/NotificationCont'

class App extends Component {
  state={
    currentUser: 3,
    rotaOrTimes: "rota",
    notifications: "Connor is an asshole"
  }
  
  render() {
    return (
      <div className="App">
      <HomeScreen userid={this.state.currentUser} />


      <NotificationCont/> 
      </div>
    );
  }
}

export default App;