import React, {Component} from "react";
import posts from "../../../data/posts.json";
import ViewDataForDate from "./ViewDataForDate";

class StaffTimesheet extends Component {
    constructor(props){
        super(props) 
        this.state = {

        }
    }
      
render() {
    this.state.times.map ((time, index) => {

    })
    return (
        <div className = "stafftimesheet">
            <h1>Staff Timesheet </h1>
            <table>
                <thead>
                    <th>Accessed Date</th>
                </thead>
                <tbody>
                    <tr> 
                        <td>Name</td>
                        <td>Start</td>
                        <td>Finish</td>
                        <td>Absent</td>
                        <td>Leave</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>Start</td>
                        <td>Finish</td>
                        <td>Absent</td>
                        <td>Leave</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>Start</td>
                        <td>Finish</td>
                        <td>Absent</td>
                        <td>Leave</td> 
                    </tr>
                </tbody>
            </table>
        </div>
    )
}       
}

// Heading & Dummy Table with spaces for the accessed date and employee information 