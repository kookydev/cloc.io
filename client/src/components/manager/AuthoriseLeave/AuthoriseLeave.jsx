import React, { Component } from 'react'

// let leaveAuthorised = {leaveAuth}

export class AuthoriseLeave extends Component {

  render() {
    return (
      <div>
        <h1>Leave Requests</h1>

        <button>Authorise</button>
        <button onClick={this.props.declineRequest}>Decline</button>
      </div>
    )
  }
}

export default AuthoriseLeave


// psuedo code: 
// pass leave/sick through to manager 
// Manager is alert of amount of people off 
// if peopleAbsent < 2 = allow authorisation

