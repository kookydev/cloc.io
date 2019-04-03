import React from "react";

const AddUser = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        Forename:
        <input
          placeholder="Forename"
          name="forename"
          id="forename"
          value={props.value}
          onChange={props.handleChange}
        />
        <br />
        Surname:
        <input
          placeholder="Surname"
          name="surname"
          id="surname"
          value={props.value}
          onChange={props.handleChange}
        />
        <br />
        Username:
        <input
          placeholder="Forename"
          name="username"
          id="username"
          value={props.value}
          onChange={props.handleChange}
        />
        <br />
        Password:
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          value={props.value}
          onChange={props.handleChange}
        />
        <br />
        Auth Level:
        <select id="auth_lvl" value={props.value} onChange={props.handleChange}>
          <option value="default">Select...</option>
          <option value="1">User</option>
          <option value="2">Manager</option>
          <option value="3">Admin</option>
        </select>
        <br />
        Job role:
        <select id="job_role" value={props.value} onChange={props.handleChange}>
          <option value="default">Select...</option>
          <option value="programmer">Programmer</option>
          <option value="pa">Personal Assistant</option>
          <option value="tester">Tester</option>
        </select>
        <br />
        Manager:
        <select id="manager" value={props.value} onChange={props.handleChange}>
          <option value="default">Select...</option>
          <option value="connor">Connor</option>
          <option value="kyle">Kyle</option>
          <option value="kieran">Kieran</option>
          <option value="alex">Alex</option>
          <option value="ash">Ash</option>
        </select>
        <br />
        <button onClick={props.createUser}>no profanity</button>
      </form>
    </div>
  );
};

export default AddUser;
