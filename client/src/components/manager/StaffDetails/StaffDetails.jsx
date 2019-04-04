import React from "react";

const StaffDetails = props => (
  <div>
    <h2>Staff Details</h2>
    <table responsive>
      {props.staffData.map(item => {
        return (
          <tbody>
            <tr>
              <th>Name: </th>
              <td>
                {item.forename} {item.surname}
              </td>
            </tr>
            <tr>
              <th> Staff number: </th>
              <td>{item.id}</td>
            </tr>
            <tr>
              <th>D.O.B.</th>
              <td />
            </tr>
            <tr>
              <th rowspan="4">Contacts</th>
              <tr>
                <td /> {/* This will include the name of the next of kin */}
              </tr>
              <tr>
                <td /> {/* This will include the relationship */}
              </tr>
              <tr>
                <td /> {/* This will include Home Number */}
              </tr>
              <tr>
                <td /> {/* This will include Mobile Number */}
              </tr>
            </tr>
            <tr>
              <th>View Rota</th>
              {item.rota.map(day => (
                <td>{day}</td>
              ))}
            </tr>
            <tr>
              <th>View TimeSheet</th>
              {item.times.map(time => (
                <td>{time}</td>
              ))}
            </tr>
            <tr>
              <th>Next Leave Start</th>
              {/* <td>{item.requests}</td> */}
              {item.requests.map(request => (
                <td>{request.type}</td>
              ))}
            </tr>
          </tbody>
        );
      })}
    </table>
  </div>
);

export default StaffDetails;
