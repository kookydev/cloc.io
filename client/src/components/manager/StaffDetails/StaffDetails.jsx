import React from "react";
import PostData from "../../../data/posts.json";
import staffData from "../../../App.js";

const StaffDetails = props => {
  let staffData = PostData.find(object => {
    return object.id === props.userid;
  });
  return (
    <div>
      <h2>Staff Details</h2>
      <table responsive>
        <thead>
          <tr>
            <th />
            <th />
            <th>Name</th>
            <th>Staff Number</th>
            <th>D.O.B.</th>
            <th>Contacts:</th>
            <th>Name</th>
            <th>Relationship</th>
            <th>Phone 1</th>
            <th>Phone 2</th>
            <th>View Rota</th>
            <th>View TimeSheet</th>
            <th>Next Leave Start</th>
          </tr>
        </thead>
        <tbody>
          {staffData.map(item => {
            return (
              <tr>
                <td>
                  {item.forename} {item.surname}
                </td>
                <td>{item.id}</td>
                <td />
                <td />
                <td>{item.rota}</td>
                <td>{item.times}</td>
                <td>{item.requests}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StaffDetails;
