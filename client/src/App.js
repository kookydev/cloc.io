import React, { Component } from 'react';
import './App.css';
import RotaTimesheet from './components/user/RotaTimesheet/RotaTimesheet';
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
      <RotaTimesheet userid={this.state.currentUser} rotaOrTimes={this.state.rotaOrTimes}/>
      {/* <HomeScreen authLevel={2} />
      <NotificationCont/>  */}

      </div>
    );
  }
}

export default App;