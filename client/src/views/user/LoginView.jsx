import React from "react";
import Login from "../../components/user/LogIn/Login";

const LoginView = props => {
  return (
    <Login
      handleChange={props.handleChange}
      handleSubmit={props.handleSubmit}
      compareDB={props.compareDB}
      value={props.value}
    />
  );
};

export default LoginView;
