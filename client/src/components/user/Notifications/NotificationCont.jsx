import React, { Component } from 'react'
import Notification from './Notifications'

class NotificationCont extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            notification: "Text Here",
         }
        
    }
    render() { 
        return (  
            <Notification notifyid={ this.state.notification } />
        );
    }
}
 
export default NotificationCont;