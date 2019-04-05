import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import './HomeScreen.css';
import Icon1 from '../../../holiday_logo.svg';
import Icon2 from '../../../timesheet_logo.svg';
import Icon3 from '../../../clockin_logo.svg';
import Icon4 from '../../../staff_logo.svg';
import Icon5 from '../../../adduser_logo.svg';
import RequestLeave from "../RequestLeave/RequestLeave";
import RotaTimesheet from "../RotaTimesheet/RotaTimesheet";
import ClockInOut from "../ClockInOut/ClockInOut";
import StaffOverview from "../../manager/StaffOverview/StaffOverview";
import ViewEditUsers from "../../admin/ViewEditUsers/ViewEditUsers"
import StaffTimesheet from "../../manager/StaffTimesheet/StaffTimesheet";
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
        <div>
          {props.holidayRequest} <Link to="/holidayreq">Holiday Request</Link>
        </div>
        <div>
          <div>{props.holidayRequest} <Link to="/holidayreq">Holiday Request</Link></div>
          <div>{props.timeSheet} <Link to="/timesheet">Timesheet</Link></div>
          <div>{props.ClockIn} Clock In</div>
      </div>
      </div>
    );
  } 
  // If the authLevel passed in is 2
  else if (props.authLevel === 2) {
    return (
      <div className="grid-container">
        <div className="navbar"></div>
        <img id='icon1' src={Icon1}></img>
        <div className="holiday">{props.holidayRequest} Holiday Request</div>
        <img id='icon2' src={Icon2}></img>
        <div className="timesheet">{props.timeSheet} Timesheet</div>
        <img id='icon3' src={Icon3}></img>
        <div className="clockin">{props.ClockIn} Clock In</div>
        <img id='icon4' src={Icon4}></img>
        <div className="staff">{props.staff} View Staff</div>
        <img id='icon5' src={Icon5}></img>
        <div className="add">Add User</div>
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
