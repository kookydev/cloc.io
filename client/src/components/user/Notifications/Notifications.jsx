import React from 'react'

const Notifications  = (props) => {
 let theBody = "Hello"
 let dissmis = true
 let icon1 = 'https://www.freeiconspng.com/img/2743.png'
  let options = {
    requireInteraction: dissmis,
    body: theBody,
    icon: icon1
}
        if (!("Notification" in window)) {
          alert("This browser does not support desktop notification");
        }
        // this should push your new notifications
        else if (Notification.permission === "granted") {
         new Notification(props.notifyid, options)
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
 
export default Notifications ;