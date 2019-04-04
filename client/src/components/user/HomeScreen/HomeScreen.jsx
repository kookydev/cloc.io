import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import RequestLeave from "../RequestLeave/RequestLeave";
import RotaTimesheet from "../RotaTimesheet/RotaTimesheet";
import ClockInOut from "../ClockInOut/ClockInOut"
import StaffOverview from "../../manager/StaffOverview/StaffOverview";
import ViewEditUsers from "../../admin/ViewEditUsers/ViewEditUsers"

// let userData = {
//   userName: "Jacob",
//   password: "1234",
//   authLevel: 1,
//   name: "Jacob Zielinski"
// };

const HomeScreen = props => {
  // If the authLevel passed in is 1
  if (props.authLevel === 1) {
    return (
        <div>
          <div>{props.holidayRequest} Holiday Request</div>
          <div>{props.timeSheet} Timesheet</div>
          <div>{props.ClockIn} Clock In</div>
        </div>
    );
  } 
  // If the authLevel passed in is 2
  else if (props.authLevel === 2) {
    return (
      <div>
         <div>{props.holidayRequest} Holiday Request</div>
        <div>{props.timeSheet} Timesheet</div>
        <div>{props.ClockIn} Clock In</div>
        <div>{props.staff} Staff</div>
      </div>
    );
  } 
  // If the authLevel passed in is 3
  else if (props.authLevel === 3) {
    return (
      <div>
       <div>{props.holidayRequest} Holiday Request</div>
        <div>{props.timeSheet} Timesheet</div>
        <div>{props.ClockIn} Clock In</div>
        <div>{props.staff} Staff</div>
        <div>{props.admin} Create/edit Users</div>
      </div>
    );
  } 
  // If the authLevel is neither 1 nor 2 nor 3
  else {
    return (
      <div>
        <div>Something Went Wrong</div>
      </div>
    );
  }
};

export default HomeScreen;
