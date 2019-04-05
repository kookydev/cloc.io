import React from "react";

const Notifications = props => {
  //add description
  let description = "Put some more info here";
  //chnage to false if you want notification to dissapear after a while
  let dissmis = true;
  let options = {
    requireInteraction: dissmis,
    body: description
  };
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }
  // this should push your new notifications
  else if (Notification.permission === "granted") {
    new Notification(props.notifyid, options);
    Notification.onClose = function() {
    };
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function(permission) {
      if (permission === "granted") {
        //first notifiaction after you accept notifications
        new Notification("You will be notified when something comes up!");
      }
    });
  }

  return (
    <div>
      {/* if you want to print notificantion on tthe page */}
      {/* <p>{props.notifyid}</p> */}
    </div>
  );
};

export default Notifications;
