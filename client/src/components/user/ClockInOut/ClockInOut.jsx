import React from 'react';

const test = (props) => {
  console.log('fucked it');
  // console.log(props.clockIn())
}

const ClockInOut = (props) => {
    return (  
        <div>
            <button type="submit" onClick={props.clockIn}>CLOCK IN</button>
            <button type="submit" onClick={test}>CLOCK OUT</button>
        </div>
    );
}
 
export default ClockInOut;