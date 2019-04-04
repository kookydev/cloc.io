import React, { Component } from 'react';
import RotaTimesheet from './components/user/RotaTimesheet/RotaTimesheet';
import './App.css';
import HomeScreen from './components/user/HomeScreen/HomeScreen';

import ClockInOutCont from "./components/user/ClockInOut/ClockInOutCont"


class App extends Component {
  state = {

  }

  render() {
    return (
      <div className="App">
        <ClockInOutCont />
      </div>
    );
  }
}

export default App;