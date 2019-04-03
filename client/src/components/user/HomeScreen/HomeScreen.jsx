import React from "react";

let userData = {
  userName: "Jacob",
  password: "1234",
  authLevel: 1,
  name: "Jacob Zielinski"
};

const HomeScreen = props => {
  if (props.authLevel === 1) {
    return (
      <div>
        <div>{props.holidayRequest} Holiday Request</div>
        <div>{props.timeSheet} Timesheet</div>
        <div>{props.ClockIn} Clock In</div>
      </div>
    );
  } else if (props.authLevel === 2) {
    return (
      <div>
         <div>{props.holidayRequest} Holiday Request</div>
        <div>{props.timeSheet} Timesheet</div>
        <div>{props.ClockIn} Clock In</div>
        <div>{props.staff} Staff</div>
      </div>
    );
  } else if (props.authLevel === 3) {
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
