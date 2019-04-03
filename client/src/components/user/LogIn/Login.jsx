import React from "react";

const Login = props => {
  return (
    <div>
      <div>
        <div>
          <h2>Login</h2>
          <input
            id="username"
            type="text"
            placeholder="Enter Username"
            value={this.state.value}
            onChange={this.handleChange}
          />

          <h2>Password</h2>
          <input
            id="password"
            type="password"
            placeholder="Enter Password"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <br />
          <button 
          type="submit" 
          onClick={props.handleSubmit}>
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
