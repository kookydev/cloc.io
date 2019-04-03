import React from "react";
import "./StaffOverview.css";

const StaffOverview = props => {
  return (
    <div>
      <h2>Staff</h2>
      <div class="staff-table">
        <b>Staff ID</b>
        <b>Forename</b>
        <b>Surname</b>
        <b>Requests</b>
        <span />
        {props.staffData.map(item => {
          return (
            <>
              <span>{item.id}</span>
              <span>{item.forename}</span>
              <span>{item.surname}</span>
              <span>{item.requests.length}</span>
              <span>
                {item.requests.length > 0 ? (
                  <button>Authorise</button>
                ) : (
                  <span />
                )}
              </span>
            </>
          );
        })}
      </div>
      <button type="button" data-toggle="modal" data-target="#staffModal">
        Open Staff Details
      </button>

      {/* Code below for Staff Details Modal*/}
      {/* <div class="modal fade" id="staffModal" role="dialog">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" data-dismiss="modal"></button>
              <h4>Staff Member</h4>
            </div>
            <div>
            <p>Staff Member Details</p>
            </div>
            <button type="button" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default StaffOverview;
