import React from "react";
import "../../Forms.css";
import logos from "../../../logos/logo_text.svg";

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
          <h2 className="employeeText">Employee ID:</h2>
          <input
            type="text"
            className="employeeInput"
            placeholder="Enter Username"
            required
          />

          <h2 className="passwordText">Password:</h2>
          <input
            type="password"
            className="passwordInput"
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
            Login
          </button>
          <br />
          <label>
            <input type="checkbox" checked="checked" name="remember" />
            Remember Me
          </label>
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
