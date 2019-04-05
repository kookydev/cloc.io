import React, { Component } from "react";

class RotaWeek extends Component {
  state = {
    index: this.props.index,
    rota: [
      ["09:00", "17:00"],
      ["09:00", "17:00"],
      ["09:00", "17:00"],
      ["09:00", "17:00"],
      ["09:00", "17:00"],
      ["09:00", "17:00"],
      ["09:00", "17:00"]
    ]
  };

  handleChange = (e, dataDay, startOrFinish) => {
    let rota = this.state.rota;
    rota[dataDay][startOrFinish] = e.target.value;
    // console.log(rota);
    this.setState({ rota: rota });
    this.props.handleRotaWeekChange(this.state);
  };
  componentDidMount() {
    this.props.handleRotaWeekChange(this.state);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <tr>
          <h4>Week {this.props.index + 1}</h4>
          <td>Start</td>
          <td>Finish</td>
        </tr>
        <tr>
          <td>
            <h3>Monday</h3>
          </td>
          <td>
            <input
              // id={rotaPosition}
              type="time"
              onChange={e => {
                this.handleChange(e, 0, 0);
              }}
              defaultValue={this.state.rota[0][0]}
            />
          </td>
          <td>
            <input
              type="time"
              onChange={e => {
                this.handleChange(e, 0, 1);
              }}
              defaultValue={this.state.rota[0][1]}
            />
          </td>
        </tr>
        <tr>
          <td>
            <h3>Tuesday</h3>
          </td>
          <td>
            <input
              type="time"
              onChange={e => {
                this.handleChange(e, 1, 0);
              }}
              defaultValue={this.state.rota[1][0]}
            />
          </td>
          <td>
            <input
              type="time"
              onChange={e => {
                this.handleChange(e, 1, 1);
              }}
              defaultValue={this.state.rota[1][1]}
            />
          </td>
        </tr>
        <tr>
          <td>
            <h3>Wednesday</h3>
          </td>
          <td>
            <input
              type="time"
              onChange={e => {
                this.handleChange(e, 2, 0);
              }}
              defaultValue={this.state.rota[2][0]}
            />
          </td>
          <td>
            <input
              type="time"
              onChange={e => {
                this.handleChange(e, 2, 1);
              }}
              defaultValue={this.state.rota[2][1]}
            />
          </td>
        </tr>
        <tr>
          <td>
            <h3>Thursday</h3>
          </td>
          <td>
            <input
              type="time"
              onChange={e => {
                this.handleChange(e, 3, 0);
              }}
              defaultValue={this.state.rota[3][0]}
            />
          </td>
          <td>
            <input
              type="time"
              onChange={e => {
                this.handleChange(e, 3, 1);
              }}
              defaultValue={this.state.rota[3][1]}
            />
          </td>
        </tr>
        <tr>
          <td>
            <h3>Friday</h3>
          </td>
          <td>
            <input
              type="time"
              onChange={e => {
                this.handleChange(e, 4, 0);
              }}
              defaultValue={this.state.rota[4][0]}
            />
          </td>
          <td>
            <input
              type="time"
              onChange={e => {
                this.handleChange(e, 4, 1);
              }}
              defaultValue={this.state.rota[4][1]}
            />
          </td>
        </tr>
        <tr>
          <td>
            <h3>Saturday</h3>
          </td>
          <td>
            <input
              type="time"
              onChange={e => {
                this.handleChange(e, 5, 0);
              }}
              defaultValue={this.state.rota[5][0]}
            />
          </td>
          <td>
            <input
              type="time"
              onChange={e => {
                this.handleChange(e, 5, 1);
              }}
              defaultValue={this.state.rota[5][1]}
            />
          </td>
        </tr>
        <tr>
          <td>
            <h3>Sunday</h3>
          </td>
          <td>
            <input
              type="time"
              onChange={e => {
                this.handleChange(e, 6, 0);
              }}
              defaultValue={this.state.rota[6][0]}
            />
          </td>
          <td>
            <input
              type="time"
              onChange={e => {
                this.handleChange(e, 6, 1);
              }}
              defaultValue={this.state.rota[6][1]}
            />
          </td>
        </tr>
        <br />
      </form>
    );
  }
}

export default RotaWeek;
