import React from "react";
import HomeScreen from "../../components/user/HomeScreen/HomeScreen";
import NotificationCont from "../../components/user/Notifications/NotificationCont"

const HomeScreenView = props => {
  return (
    <div>
      <HomeScreen
      auth_lvl={props.auth_lvl}
      clockIn={props.clockIn}
      clockOut={props.clockOut}
      />
      <NotificationCont />
    </div>
  );
};

export default HomeScreenView;
