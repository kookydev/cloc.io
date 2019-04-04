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
            <th>Contacts</th>
            <th>View Rota</th>
            <th>View TimeSheet</th>
            <th>Next Leave Start</th>
          </tr>
        </thead>
        <tbody>
          {staffData.map(item => {
            return (
              <>
                <tr>
                  <td>
                    {item.forename} {item.surname}
                  </td>
                </tr>
                <tr>
                  <td>{item.id}</td>
                </tr>
                <tr>
                  <td />
                </tr>
                <tr>
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
                <tr>
                  <td>{item.rota}</td>
                </tr>
                <tr>
                  <td>{item.times}</td>
                </tr>
                <tr>
                  <td>{item.requests}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StaffDetails;
