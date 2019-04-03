import React from 'react'
let notification = 'hello'

let notify = "Valentino"
const Notifications  = (props) => {
    
        if (!("Notification" in window)) {
          alert("This browser does not support desktop notification");
        }
        // this should push your new notifications
        else if (Notification.permission === "granted") {
          let notification = new Notification(props.notification);
          Notification.onclose = function() {
            //   alert('Hello!')
          };
        }
        else if (Notification.permission !== "denied") {
          Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
              let notification = new Notification("You will be notified when something comes up!");
            }
          });
        }
     
    
    
    return (
        <div>

        </div>
      );
}
 
export default Notifications ;