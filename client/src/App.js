import React, { Component } from 'react';
import RotaTimesheet from './components/user/RotaTimesheet/RotaTimesheet';
import './App.css';
import ViewEditUsers from './components/admin/ViewEditUsers/ViewEditUsers';

class App extends Component {
  state = {
    currentUser: 2,
    rotaOrTimes: "rota"
  }
  
  
  render() {
    return (
      <div className="App">
          <RotaTimesheet userid={this.state.currentUser} rotaOrTimes={this.state.rotaOrTimes}/>
          <ViewEditUsers /> 
      </div>
    );
  }
}

export default App;