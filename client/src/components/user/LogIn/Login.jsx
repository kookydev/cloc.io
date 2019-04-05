import React from "react";

const Login = props => {
  function handleClick(e) {
    e.preventDefault();
    console.log("Login was clicked");
  }

  return (
    <div>
      <div>
        <div>
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
