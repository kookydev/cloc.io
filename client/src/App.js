import React, { Component } from 'react';
import RotaTimesheet from './components/user/RotaTimesheet/RotaTimesheet';
import './App.css';
import HomeScreen from './components/user/HomeScreen/HomeScreen';

class App extends Component {
  state={
    currentUser: 2,
    rotaOrTimes: "rota"
  }
  
  render() {
    return (
      <div className="App">
        <HomeScreen authLevel="2" />
      </div>
    );
  }
}

export default App;