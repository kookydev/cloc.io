import React from "react";
import "../../Forms.css";
import logos from "../../../logos/logo_text.svg";
import { Link } from "react-router-dom";

const Login = props => {
  function handleClick(e) {
    e.preventDefault();
    console.log("Login was clicked");
  }

  return (
    <div className="login">
      `
      <img id="logo" src={logos} />
      <h2 className="employeeText">Login</h2>
      <input
        className="employeeInput fieldInput"
        id="username"
        type="text"
        placeholder="Enter Username"
        value={props.value}
        onChange={props.handleChange}
      />
      <h2 className="passwordText">Password</h2>
      <input
        className="passwordInput fieldInput"
        id="password"
        type="password"
        placeholder="Enter Password"
        value={props.value}
        onChange={props.handleChange}
      />
      <br />
      <br />
      <button type="submit" onClick={props.compareDB} className="loginBtn">
        Login
      </button>
      <br />
      <Link to="/">Home</Link>
      {/* <label>
            <input type="checkbox" checked="checked" name="remember" />
            Remember Me
          </label> */}
      <span>
        Forgot <a href=" ">password?</a>
      </span>
    </div>
  );
};

export default Login;
