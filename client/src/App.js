import React, { Component } from 'react';
import './App.css';
import HomeScreen from './components/user/HomeScreen/HomeScreen'
import Notification from './components/user/Notifications/Notifications'

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
      <Notification notifyid={this.state.notifications} />
      </div>
    );
  }
}

export default App;