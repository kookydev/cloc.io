import React from "react";

const StaffOverview = props => {
  return (
    <div>
      <h2>Staff</h2>
      <button type="button" data-toggle="modal">
        Open Staff
      </button>
      <div class="modal fade">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" data-dismiss="modal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffOverview;
