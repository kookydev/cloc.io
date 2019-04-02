import React, { Component } from 'react'

class Time extends Component {

theTime = () => new Date().toLocaleTimeString()


clockIn = () => {
  this.props.clockFunc(this.theTime(), true)
};

clockOut = () => {
  this.props.clockFunc(this.theTime(), false)
};

  render() {
    
    return (
      <div>
        <button 
        disabled={this.props.onDuty ? true : false}
        // className={this.props.onDuty ? 'disabled' : 'enabled' } 
        onClick={this.clockIn}>Clock In
        </button>

        <button 
        disabled={this.props.onDuty ? false : true}
        // className={this.props.onDuty ? 'enabled' : 'disabled' } 
        onClick={this.clockOut}>Clock Out
        </button>
      </div>
    )
  }
}

export default Time

