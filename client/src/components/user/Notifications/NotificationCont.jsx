import React, { Component } from 'react'
import Notification from './Notifications'

class NotificationCont extends Component {
<<<<<<< HEAD
    
=======
>>>>>>> master
    constructor(props) {
        super(props);
        this.state = { 
            notification: "Notification Text Here"
         }
<<<<<<< HEAD
        
=======
>>>>>>> master
    }
    render() { 
        return (  
            <Notification notifyid={ this.state.notification } />
        );
    }
}
 
export default NotificationCont;