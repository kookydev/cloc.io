import React, { Component } from 'react'
import Notification from './Notifications'

class NotificationCont extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            notification: "Welcome to clock.io",
         }
    }

    
    notificationLoop() {
        //3600000 1hr
        //900000 15min
        //
        let timer = 3600000;
        let breakActive = false;

        setTimeout(() => {
            if(breakActive === false) {
                this.setState({ notification: "Its time to take a break!"})
                breakActive = true;
                timer = 900000;
            } else if(breakActive === true) {
                this.setState({ notification: "Break over! Back to work."})
                breakActive = false;
                timer = 3600000
            }
        }, timer);
    }

    render() { 
        return (  
            <Notification notifyid={ this.state.notification } runtime={this.notificationLoop()} />
        );
    }
}
 
export default NotificationCont;