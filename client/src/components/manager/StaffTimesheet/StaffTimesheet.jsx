import React, {Component} from "react";
import posts from "../../../data/posts.json";
import {dataToTimeString, dataToDayString, dataToDayNumber} from "../../user/RotaTimesheet/RotaTimesheet";
import ViewDataForDate from "./ViewDataForDate";

class StaffTimesheet extends Component {
    constructor(props){
        super(props) 
        this.state = {}
    }

    componentDidMount() {
        this.refreshData()
    }
      
    refreshData = () => {
        let data = [];
        let postsMap = posts.map((employee,index)=>{
            let rotaMap = employee.rota.map((pairOfTimes,index)=>{
                let rotaObject = {
                    day: dataToDayString(pairOfTimes[0]),
                    date: dataToDayNumber(pairOfTimes[0]),
                    id: employee.id,
                    name: employee.name,
                    surname: employee.surname,
                    rota: pairOfTimes
                }
                data.push(rotaObject)
            })
            let timesMap = employee.times.map((pairOfTimes,index)=>{
                let timesObject = {
                    day: dataToDayString(pairOfTimes[0]),
                    date: dataToDayNumber(pairOfTimes[0]),
                    id: employee.id,
                    name: employee.name,
                    surname: employee.surname,
                    times: pairOfTimes
                }
                data.push(timesObject)
            })
        })
        this.setState({data: data})
    }

render() {
    {this.state ? "" : (
        let tables = ["1st April","2nd April","3rd April","4th April","5th April"].map((date,index)=>{
            let checkDate = (dataObject) => {
                return dataObject.date == date
            }
            let rows = this.state.data.filter(checkDate).map((dataObject,index)=>{
                return (
                    <tr> 
                        <td>{dataObject.name}</td>
                        <td>{dataObject.rota[0]}</td>
                        <td>{dataObject.rota[1]}</td>
                        <td>No</td>
                        <td>No</td>
                    </tr>
                )
            })
            return (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th colspan={5}>{date}</th>
                            </tr>
                            <tr> 
                                <th>Name</th>
                                <th>Start</th>
                                <th>Finish</th>
                                <th>Absent</th>
                                <th>Leave</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                            {/* <tr> 
                                <td>Elishka</td>
                                <td>10:30</td>
                                <td>16:00</td>
                                <td>No</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>Will</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>Yes</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>Jakub</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>Yes</td>
                                <td>Yes</td> 
                            </tr> */}
                        </tbody>
                    </table>
                    <br />
                </div>
            )})
        return (
            <div className = "stafftimesheet">
                <h1>Staff Timesheet </h1>
                {tables}
            </div>
        )
    )
    } 
    }
}

// Heading & Dummy Table with spaces for the accessed date and employee information 

export default StaffTimesheet;