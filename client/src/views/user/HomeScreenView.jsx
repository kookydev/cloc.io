import React from "react";
import HomeScreen from "../../components/user/HomeScreen/HomeScreen";

const HomeScreenView = props => {
  return (
    <div>
      <HomeScreen
      auth_lvl={props.auth_lvl}
      />
    </div>
  );
};

export default HomeScreenView;
