import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import RequestLeave from "../RequestLeave/RequestLeave";
import RotaTimesheet from "../RotaTimesheet/RotaTimesheet";
import ClockInOut from "../ClockInOut/ClockInOut"
// import StaffOverview from "../../manager/StaffOverview/StaffOverview";
// import ViewEditUsers from "../../admin/ViewEditUsers/ViewEditUsers"
import AddUser from '../../admin/AddUser/AddUser';

const HomeScreen = props => {
  // If the authLevel passed in is 1
  if (props.auth_lvl === 1) {
    return (
      <Router>
        <div>
          <Link to="/holiday">Holiday Request</Link>
          <br />
          <Link to="/timesheet">Timesheet</Link>
          <br />
          <Link to="/clockinout">ClockIn</Link>

          <Route path="/holiday" component={RequestLeave} />
          <Route path="/timesheet" component={RotaTimesheet} />
          <Route path="/clockinout" component={ClockInOut} />
        </div>
      </Router>
    );
  }
  // If the authLevel passed in is 2
  else if (props.auth_lvl === 2) {
    return (
      <Router>
        <div>
          <Link to="/home/holiday">Holiday Request</Link>
          <br />
          <Link to="/home/timesheet">Timesheet</Link>
          <br />
          <Link to="/home/clockinout">ClockIn</Link>
          <br />
          <Link to="/home/staff">Staff</Link>

          <Route path="/home/holiday" component={RequestLeave} />
          <Route path="/home/timesheet" component={RotaTimesheet} />
          <Route path="/home/clockinout" component={ClockInOut} />
          <Route path="/home/staff" component={ClockInOut} />
        </div>
      </Router>
    );
  }
  // If the authLevel passed in is 3
  else if (props.auth_lvl === 3) {
    return (
      <Router>
        <div>
          <Link to="/home/holiday">Holiday Request</Link>
          <br />
          <Link to="/home/timesheet">Timesheet</Link>
          <br />
          <Link to="/home/clockinout">ClockIn</Link>
          <br />
          <Link to="/home/staff">Staff</Link>
          <br />
          <Link to="/home/createuser">Create User</Link>

          <Route path="/home/holiday" component={RequestLeave} />
          <Route path="/home/timesheet" component={RotaTimesheet} />
          <Route path="/home/clockinout" component={ClockInOut} />
          <Route path="/home/staff" component={ClockInOut} />
          <Route path="/home/createuser" component={AddUser} />
        </div>
      </Router>
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
