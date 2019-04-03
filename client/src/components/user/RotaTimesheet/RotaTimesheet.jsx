import React from "react";
import PostData from "../../../data/posts.json";

let dataToTimeString = date => {
  date = new Date(date * 1000);
  let hours;
  let minutes;
  hours = date.getHours() - 1;
  minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return hours + "." + minutes;
};

let dataToDayString = date => {
  date = new Date(date * 1000);
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return weekdays[date.getDay()];
};

let dataToDayNumber = date => {
  date = new Date(date * 1000);
  let month;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  month = months[date.getMonth()];

  if (date.getDate() === 1 || date.getDate() === 21 || date.getDate() === 31){
    return date.getDate() + "st " + month;}
  else if (date.getDate() === 2 || date.getDate() === 22) {
    return date.getDate() + "nd " + month;
  } else if (date.getDate() === 3 || date.getDate() === 23) {
    return date.getDate() + "rd " + month;
  } else {
    return date.getDate() + "th " + month;
  }
};

let RotaTimesheet = (props) => {
    let userData = PostData.find(object => {
      return object.id === props.userid;
    });
    return (
      <div>
        <h1>{props.rotaOrTimes == "rota" ? "Rota" : "Times"} for {userData.name}</h1>
        <table responsive>
          <thead>
            <tr>
            <th/>
            <th/>
            <th>Start</th>
            <th>Finish</th>
            </tr>
          </thead>
          <tbody>
          {props.rotaOrTimes == "rota" ? (userData.rota.map(postDetail => {
              return (
                <tr>
                  <td>{dataToDayString(postDetail[0])}</td>
                  <td>{dataToDayNumber(postDetail[0])}</td>
                  <td>{dataToTimeString(postDetail[0])}</td>
                  <td>{dataToTimeString(postDetail[1])}</td>
                </tr>
              );
            })) : (userData.times.map(postDetail => {
              return (
                <tr>
                  <td>{dataToDayString(postDetail[0])}</td>
                  <td>{dataToDayNumber(postDetail[0])}</td>
                  <td>{dataToTimeString(postDetail[0])}</td>
                  <td>{dataToTimeString(postDetail[1])}</td>
                </tr>
              );
            }))}
            
          </tbody>
        </table>
      </div>
    );
}

export default RotaTimesheet;
