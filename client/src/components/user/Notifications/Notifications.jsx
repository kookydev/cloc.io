import React from 'react'

const Notifications  = (props) => {
    
        if (!("Notification" in window)) {
          alert("This browser does not support desktop notification");
        }
        // this should push your new notifications
        else if (Notification.permission === "granted") {
         new Notification(props.notifyid);
          Notification.onclose = function() {
          };
        }
        else if (Notification.permission !== "denied") {
          Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
              new Notification("You will be notified when something comes up!");
            }
          });
        }
     
    
    
    return (
        <div>
         
        </div>
      );
}
 
export default Notifications;