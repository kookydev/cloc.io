import React, { Component } from 'react'
import Notification from './Notifications'

class NotificationCont extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            notification: "Notification Text Here"
         }
    }

    notificationDisplay() {
        let timer = 10000
        setTimeout(() => {
            
        
        })
    };

    pauseNotification() {
        clearTimeout()
    }

    render() { 
        return (  
            <div>
                <Notification notifyid={ this.state.notification } func={this.notificationDisplay()} />
                <button onClick={this.pauseNotification}></button>
            </div>
        );
    }
}
 
export default NotificationCont;