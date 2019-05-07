import React from "react";
import HomeScreen from "../../components/user/HomeScreen/HomeScreen";
import NotificationCont from "../../components/user/Notifications/NotificationCont";
import Login from "../../components/user/LogIn/Login";

const HomeScreenView = props => {
  const displaySwitch = () => {
    if (props.username != null) {
      console.log(props.auth_lvl);
      return (
        <div>
          <HomeScreen auth_lvl={props.auth_lvl} />
          <NotificationCont />
        </div>
      );
    } else {
      return (
        <Login
          handleChange={props.handleChange}
          handleSubmit={props.handleSubmit}
          compareDB={props.compareDB}
          value={props.value}
        />
      );
    }
  };
  return displaySwitch();
};

export default HomeScreenView;
