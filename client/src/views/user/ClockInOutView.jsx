import React from "react";
import ClockInOut from "../../components/user/ClockInOut/ClockInOut";

const ClockInOutView = props => {
  return (
    <div>
      <ClockInOut
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
        clockIn={props.clockIn}
        clockOut={props.clockOut}
        value={props.value}
      />
    </div>
  );
};

export default ClockInOutView;
