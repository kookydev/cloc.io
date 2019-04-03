import React, { Component } from 'react';
import RotaTimesheet from './components/user/RotaTimesheet/RotaTimesheet';
import HomeScreen from './components/user/HomeScreen/HomeScreen'
import './App.css';

class App extends Component {
  state={
    currentUser: 2,
    rotaOrTimes: "rota"
  }
  
  render() {
    return (
      <div className="App">
              <RotaTimesheet userid={this.state.currentUser} rotaOrTimes={this.state.rotaOrTimes}/>

      </div>
    );
  }
}

export default App;