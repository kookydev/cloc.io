import React, { Component } from 'react';
import './App.css';

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
