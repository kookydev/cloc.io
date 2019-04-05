import React from "react";
<<<<<<< HEAD
import "../../Forms.css";
import logos from "../../../logos/logo_text.svg";
=======
import { Link } from 'react-router-dom'
>>>>>>> master

const Login = props => {
  function handleClick(e) {
    e.preventDefault();
    console.log("Login was clicked");
  }

  return (
    <div className="Login">
      <img id="logo" src={logos} />
      <div>
        <div>
<<<<<<< HEAD
          <h2 className="employeeText">Employee ID:</h2>
          <input
            type="text"
            className="employeeInput fieldInput"
            placeholder="Enter Username"
            required
          />

          <h2 className="passwordText">Password:</h2>
          <input
            type="password"
            className="passwordInput fieldInput"
            placeholder="Enter Password"
            required
          />
          <br />
          <br />
          <button
            type="submit"
            className="loginBtn"
            onClick={handleClick}
            href=" "
          >
            LOGIN
          </button>
          <br />
          <label>
=======
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
>>>>>>> master
            <input type="checkbox" checked="checked" name="remember" />
            Remember Me
          </label> */}
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
