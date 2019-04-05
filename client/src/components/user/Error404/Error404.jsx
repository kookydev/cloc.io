import React from "react";
import "../../../index.css";
import "./Error404.css";

const Error404 = props => {
  return (
    <div>
      <h1>Error 404</h1>
      <h3>Sorry something went wrong! :(</h3>
      <p>
        Refresh the page.
        <br />
        If the problem persists please contact an Administrator for support
      </p>
    </div>
  );
};
