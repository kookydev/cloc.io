import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./HomeScreen.css";
import RequestLeave from "../RequestLeave/RequestLeave";
import RotaTimesheet from "../RotaTimesheet/RotaTimesheet";
import ClockInOut from "../ClockInOut/ClockInOut";
// import StaffOverview from "../../manager/StaffOverview/StaffOverview";
// import ViewEditUsers from "../../admin/ViewEditUsers/ViewEditUsers"
import AddUser from "../../admin/AddUser/AddUser";
import Icon1 from "../../../holiday_logo.svg";
import Icon2 from "../../../timesheet_logo.svg";
import Icon3 from "../../../clockin_logo.svg";
import Icon4 from "../../../staff_logo.svg";
import Icon5 from "../../../adduser_logo.svg";
import ViewStaffView from "../../../views/user/ViewStaffView";
import RotaView from "../../../views/user/RotaView";
import ClockInView from "../../../views/user/ClockInView";

const HomeScreen = props => {
  // If the authLevel passed in is 1
  if (props.auth_lvl === 1) {
    return (
      <>
        <div className="grid-container">
          <img id="icon1" src={Icon1} />
          <Link className="holdiay" to="/holiday">
            Holiday Request
          </Link>
          <br />
          <img id="icon2" src={Icon2} />
          <Link className="timesheet" to="/timesheet">
            Timesheet
          </Link>
          <br />
          <img id="icon3" src={Icon3} />
          <Link className="clockin" to="/clockinout">
            ClockIn
          </Link>

          <Route path="/holiday" component={RequestLeave} />
          <Route path="/timesheet" component={RotaView} />
          <Route path="/clockinout" component={ClockInOut} />
        </div>
        <div>
          <div>
            {props.holidayRequest} <Link to="/holidayreq">Holiday Request</Link>
          </div>
          <div>
            {props.timeSheet} <Link to="/timesheet">Timesheet</Link>
          </div>
          <div>{props.ClockIn} Clock In</div>
        </div>
      </>
    );
  }
  // If the authLevel passed in is 2
  else if (props.auth_lvl === 2) {
    return (
      <>
        <div className="grid-container">
          <img id="icon1" src={Icon1} />
          <Link className="holdiay" to="/home/holiday">
            Holiday Request
          </Link>
          <br />
          <img id="icon2" src={Icon2} />
          <Link className="timesheet" to="/home/timesheet">
            Timesheet
          </Link>
          <br />
          <img id="icon3" src={Icon3} />
          <Link className="clockin" to="/home/clockinout">
            ClockIn
          </Link>
          <br />
          <img id="icon4" src={Icon4} />
          <Link className="staff" to="/staff">
            Staff
          </Link>

          <Route path="/home/holiday" component={RequestLeave} />
          <Route path="/home/timesheet" component={RotaTimesheet} />
          <Route path="/home/clockinout" component={ClockInOut} />
          <Route path="/staff" component={ViewStaffView} />
        </div>
      </>
    );
  }
  // If the authLevel passed in is 3
  else if (props.auth_lvl === 3) {
    return (
      <div className="grid-container">
        <div className="navbar" />
        <img id="icon1" src={Icon1} />
        <Link className="holiday" to="/holiday">
          Holiday Request
        </Link>
        <br />
        <img id="icon2" src={Icon2} />
        <Link className="timesheet" to="/timesheet">
          Timesheet
        </Link>
        <br />
        <img id="icon3" src={Icon3} />
        <Link className="clockin" to="/clockinout">
          ClockIn
        </Link>
        <br />
        <img id="icon4" src={Icon4} />
        <Link className="staff" to="/staff">
          Staff
        </Link>
        <br />
        <img id="icon5" src={Icon5} />
        <Link className="add" to="/createuser">
          Create User
        </Link>
      </div>
    );
  }
  // If the authLevel is neither 1 nor 2 nor 3
  else {
    return (
      <div>
        <div>
          Unauthorised, please click <Link to="/login">Here</Link> to login!
        </div>
      </div>
    );
  }
};

export default HomeScreen;
