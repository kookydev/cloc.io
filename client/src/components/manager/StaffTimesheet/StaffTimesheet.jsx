import React, {Component} from "react";
import posts from "../../../data/posts.json";
import {dataToTimeString, dataToDayString, dataToDayNumber} from ".. /../user/RotaTimesheet/RotaTimesheet";
import ViewDataForDate from "./ViewDataForDate";


class StaffTimesheet extends Component {
    constructor(props){
        super(props) 
        // Initial values of state. These will be overridden on componentDidMount.
        this.state = {
            data: [{
                day: "Monday",
                date: "1st April",
                forename: "Jack",
                surname: "Smith",
                id: 1,
                rota: [900, 1700],
                times: [900, 1700]
                } 
            ], 
            dates: ["1st April","2nd April","3rd April","4th April","5th April"] 

        }
    }

    componentDidMount() {
        this.refreshData()
    } 

    // refreshData replaces data and dates in the state with information from the JSON file. 
    refreshData = () => {
        let data = [];
        let postsMap = posts.map((employee,index)=>{
            let rotaMap = employee.rota.map((pairOfTimes,index)=>{
                let rotaObject = {
                    day: dataToDayString(pairOfTimes[0]),
                    date: dataToDayNumber(pairOfTimes[0]),
                    id: employee.id,
                    forename: employee.forename,
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
                    forename: employee.forename,
                    surname: employee.surname,
                    times: pairOfTimes
                }
                data.push(timesObject)
            })
        })
        let dates = []
        data.map ((dataObject, index) => {
            if (!dates.includes(dataObject.date)){
                dates.push(dataObject.date)
            }
        })
        this.setState({data: data, dates: dates}) 
    }
/* Within render we are rendering a table for every date in state.dates and within every table
    we are rendering a row for every object within the state.data that matches that date.
*/
render() {
        let tables = this.state.dates.map((date,index)=>{ 
            let checkDate = (dataObject) => {
                return dataObject.date == date
            } 
            let filteredObjects = this.state.data.filter(checkDate)
            
            let rows = filteredObjects.map((dataObject,index)=>{ 
                console.log (dataObject) 
                    if (dataObject[this.props.rotaOrTimes]) {
                        return (
                            <tr key = {index}> 
                                <td>{dataObject.forename}</td> 
                                <td>{dataToTimeString(dataObject.rota[0])}</td>
                                <td>{dataToTimeString(dataObject.rota[1])}</td>
                                <td>No</td> 
                                <td>No</td> 
                            </tr> 
                        )
                    }
                    else {return null}
            }) 
            return (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th colSpan={5}>{date}</th>
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
                        </tbody>
                    </table>
                    <br />
                </div>
            )}) 
        return (
            <div className = "stafftimesheet"> 
                <h1> Staff {this.props.rotaOrTimes === "rota" ? "Rota" : "Timesheets"} </h1> 
                {tables}
            </div>
        ) 
    }
}

// Heading & Dummy Table with spaces for the accessed date and employee information 

export default StaffTimesheet;