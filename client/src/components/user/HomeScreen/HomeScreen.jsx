import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import RequestLeave from "../RequestLeave/RequestLeave";
import RotaTimesheet from "../RotaTimesheet/RotaTimesheet";
import ClockInOut from "../ClockInOut/ClockInOut"
import StaffOverview from "../../manager/StaffOverview/StaffOverview";
import ViewEditUsers from "../../admin/ViewEditUsers/ViewEditUsers"

let userData = {
  userName: "Jacob",
  password: "1234",
  authLevel: 1,
  name: "Jacob Zielinski"
};

const HomeScreen = props => {
  if (userData.authLevel === 1) {
    return (
        <div>
          <div>{props.holidayRequest} <Link to="/holidayreq">Holiday Request</Link></div>
          <div>{props.timeSheet} <Link to="/timesheet">Timesheet</Link></div>
          <div>{props.ClockIn} Clock In</div>
        </div>
    );
  } else if (this.state.authLevel === 2) {
    return (
      <div>
         <div>{props.holidayRequest} Holiday Request</div>
        <div>{props.timeSheet} Timesheet</div>
        <div>{props.ClockIn} Clock In</div>
        <div>{props.staff} Staff</div>
      </div>
    );
  } else if (this.state.authLevel === 3) {
    return (
      <div>
       <div>{props.holidayRequest} Holiday Request</div>
        <div>{props.timeSheet} Timesheet</div>
        <div>{props.ClockIn} Clock In</div>
        <div>{props.staff} Staff</div>
        <div>{props.admin} Create/edit Users</div>
      </div>
    );
  } else {
    return (
      <div>
        <div>Something Went Wrong</div>
      </div>
    );
  }
};

export default HomeScreen;
