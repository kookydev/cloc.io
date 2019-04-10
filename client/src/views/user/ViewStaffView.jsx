import React from "react";
import StaffOverview from '../../components/manager/StaffOverview/StaffOverview'
import fakeData from "../../data/posts.json"

const ViewStaffView = props => {
  return (
    <div>
      <StaffOverview staffData={fakeData} />
    </div>
  );
};

export default ViewStaffView;