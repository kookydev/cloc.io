import React, { Component } from 'react';
import './App.css';
import HomeScreen from './components/user/HomeScreen/HomeScreen'

class App extends Component {
  state={
    currentUser: 3,
    rotaOrTimes: "rota"
  }
  
  render() {
    return (
      <div className="App">
      <HomeScreen userid={this.state.currentUser} />
      </div>
    );
  }
}

export default App;