import React from "react";
import RotaWeek from "./RotaWeek";

class CreateRota extends React.Component {
  state = {
    weekArray: [],
    rotaArray: [],
    startDate: null,
    repeatTimes: 1
  };
  // Handles changes when number of weeks is input / changed
  handleWeekInput = e => {
    let weekArray = [];
    let rotaArray = this.state.rotaArray;
    //creates an array for us to map over later
    if (e.target.value < this.state.rotaArray.length) {
      while (rotaArray.length > e.target.value) {
        rotaArray.pop();
      }
      this.setState({ rotaArray: rotaArray });
      console.log(this.state.rotaArray);
    }
    // Pushes the default values of the weeks' rota
    for (let i = 0; i < e.target.value; i++) {
      weekArray.push(i);
    }
    this.setState({ weekArray: weekArray });
  };

  handleDateInput = e => {
    // Takes the date input and splits into Year, Month & Day
    let date = new Date(
      e.target.value.substring(0, 4),
      e.target.value.substring(5, 7) - 1,
      e.target.value.substring(8, 10)
    );
    // Takes the date and, if not a Monday, finds the Monday date
    let monday = date - (date.getDay() - 1) * 1000 * 60 * 60 * 24;
    // Sets the start date for the rota to the Monday in epoch time
    let epochDate = monday / 1000;

    this.setState({ startDate: epochDate });
  };

  // Handles input for the number of times to repeat the rota
  handleRepeatInput = e => {
    this.setState({ repeatTimes: e.target.value });
  };

  handleSubmit = event => {
    let dayOfSeconds = 24 * 60 * 60;
    let weekOfSeconds = 7 * dayOfSeconds;
    let databasePushArray = [];

    for (let i = 0; i < this.state.repeatTimes; i++) {
      let iterationNum = i;
      // Maps through the weeks of the rota, the prescribed number of times to return epoch values
      this.state.rotaArray.map((week, index) => {
        // Works out the number of seconds to add on for the week offset
        let weekSeconds = index * weekOfSeconds;
        // Adds the result to the end of the array without nesting it in an array of its own
        databasePushArray = databasePushArray.concat(
          week.map((day, index) => {
            // Works out the number of seconds to add for the day offset
            let daySeconds = index * dayOfSeconds;
            return day.map((time, index) => {
              // Extracts the hours and minutes from the time
              let hours = parseInt(time.substring(0, 2));
              let minutes = parseInt(time.substring(3, 5));
              // Converts the resulting hours and minutes into epoch time
              let convertedTime =
                hours * 3600 +
                minutes * 60 +
                daySeconds +
                weekSeconds +
                this.state.startDate +
                iterationNum * weekOfSeconds;
              return convertedTime;
            });
          })
        );
      });
    }
    // This will be what is pushed to the array:
    console.log(databasePushArray);
  };

  handleRotaWeekChange = state => {
    let rotaArray = this.state.rotaArray;
    rotaArray[state.index] = state.rota;

    this.setState({ rotaArray: rotaArray });
    console.log(this.state.rotaArray);
  };

  renderWeeks = () => {};

  render() {
    return (
      <div>
        <h1>Create ROTA for User</h1>
        <label htmlFor="week-input">How many weeks?</label>
        <input
          name="week-input"
          type="number"
          defaultValue={0}
          onChange={this.handleWeekInput}
        />
        <label htmlFor="start-date-input">Week beginning Monday:</label>
        <input
          name="start-date-input"
          type="date"
          defaultValue={0}
          onChange={this.handleDateInput}
        />
        <label htmlFor="repeat-input">Number of times to repeat:</label>
        <input
          name="repeat-input"
          type="number"
          defaultValue={1}
          onChange={this.handleRepeatInput}
        />
        {this.state.weekArray.map((week, i) => {
          return (
            <RotaWeek
              index={week}
              handleRotaWeekChange={this.handleRotaWeekChange}
            />
          );
        })}
        <tr>
          <button type="button" onClick={this.handleSubmit}>
            Submit
          </button>
        </tr>
      </div>
    );
  }
}

export default CreateRota;