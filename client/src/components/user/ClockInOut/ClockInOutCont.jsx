import React, { Component } from 'react';

import Time from './Time';

class ClockInOutCont extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            onDuty: false,
            timeIn: "",
            timeOut: "",
         }
    }

    clockingHandler = async (time, onDuty) => {
        console.log(`the time is ${time}`)
        this.setState({ onDuty: onDuty })
        console.log(`the onDuty is ${onDuty}`)
        if (onDuty === true) {
            await this.setState({ timeIn: time })
        }
        else {
            await this.setState({ timeOut: time })
        }
    };

    render() { 
        return ( 
            <Time onDuty={this.state.onDuty} clockFunc={this.clockingHandler} ciTime={this.state.timeIn} coTime={this.state.timeOut}/>
         );
    }
}

export default ClockInOutCont;