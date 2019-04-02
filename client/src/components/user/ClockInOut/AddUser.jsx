import React, { Component } from 'react'

export class AddUser extends Component {
  render() {
    return (
      <div>
          <form>
              Firstname: <input placeholder="Forename" name="firstname"></input> <br/>
              Lastname: <input placeholder="Surname" name="lastname"></input><br/>
              Password: <input type="password" placeholder="********" name="password"></input><br/>
              User access: <select>
                            <option value="1">User</option>
                            <option value="2">Manager</option>
                            <option value="1">Admin</option>
                          </select><br />
              Job role: <select>
                          <option value="programmer">Programmer</option>
                          <option value="pa">Personal Assistant</option>
                          <option value="tester">Tester</option>
                        </select><br/>
        <input type="submit"></input>
        </form>
        
      </div>
    )
  }
}

export default AddUser


