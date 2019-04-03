import React from "react";
import PostData from "../../../data/posts.json";

const StaffDetails = props => {
  let staffData = PostData.find(object => {
    return object.id === props.userid;
  });
  return (
    <div>
      <div>
        <div>
          <h2>Staff Details</h2>
          <table responsive>
            <thead>
              <tr>
                <th />
                <th />
                <th>First Name</th>
                <th>Surname</th>
              </tr>
            </thead>
            <tbody>
              {staffData.name.surname.map(staffDetail => {
                return (
                  <tr>
                    <td />
                    <td />
                    <td />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StaffDetails;
