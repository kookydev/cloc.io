import React from 'react';


//simple form submissions for holidays and sickness
const RequestLeave = (props) => {

    return (  
        <div>
            {/* form elements to be changed into props to pass down data */}
            <h1>Absence</h1><br/>
            <form>
            <h3>Holiday Request</h3><br/>
            Start Date: <input type="date" name="leaveRequest"></input> End Date: <input type="date" name="leaveRequestTo"></input><br/>
            <input type="submit"></input>
            </form>

            <form>
            <h3>Sick Leave</h3><br/>
            Sickness: <input type="date" name="sickLeave"></input><br/>
            <input type="submit"></input>
            </form>
        </div>
    );
}
 
export default RequestLeave;