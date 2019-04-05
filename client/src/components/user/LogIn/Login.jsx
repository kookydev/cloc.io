import React from "react";
<<<<<<< HEAD
import { Link } from 'react-router-dom'

const Login = props => {
=======

const Login = props => {
  function handleClick(e) {
    e.preventDefault();
    console.log("Login was clicked");
  }

>>>>>>> master
  return (
    <div>
      <div>
        <div>
<<<<<<< HEAD
          <h2>Login</h2>
          <input
            id="username"
            type="text"
            placeholder="Enter Username"
            value={props.value}
            onChange={props.handleChange}
          />

          <h2>Password</h2>
          <input
            id="password"
            type="password"
            placeholder="Enter Password"
            value={props.value}
            onChange={props.handleChange}
          />
          <br />
          <button type="submit" onClick={props.compareDB}>
            Login
          </button>
          <Link to='/home'>Home</Link>
          {/* <label>
            <input type="checkbox" checked="checked" name="remember" />
            Remember Me
          </label> */}
=======
          <h2>Employee ID:</h2>
          <input type="text" placeholder="Enter Username" required />

          <h2>Password:</h2>
          <input type="password" placeholder="Enter Password" required />
          <br />
          <button type="submit" onClick={handleClick} href=" ">
            Login
          </button>
          <label>
            <input type="checkbox" checked="checked" name="remember" />
            Remember Me
          </label>
>>>>>>> master
        </div>
      </div>

      <div>
        <span>
          Forgot <a href=" ">password?</a>
        </span>
      </div>
    </div>
  );
};

export default Login;
