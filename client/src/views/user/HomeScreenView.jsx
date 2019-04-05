import React from "react";
import HomeScreen from "../../components/user/HomeScreen/HomeScreen";

const HomeScreenView = props => {
  return (
    <div>
      <HomeScreen
      auth_lvl={props.auth_lvl}
      clockIn={props.clockIn}
      clockOut={props.clockOut}
      />
    </div>
  );
};

export default HomeScreenView;
