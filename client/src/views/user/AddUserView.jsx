import React from "react";
import AddUser from "../../components/user/AddUser/AddUser";

const AddUserView = props => {
  return (
    <div>
      <AddUser
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
        createUser={props.createUser}
        value={props.value}
      />
    </div>
  );
};

export default AddUserView;
