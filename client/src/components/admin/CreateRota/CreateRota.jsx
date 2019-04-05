import React from "react";

class CreateRota extends React.Component {
  state = {
    rota: [
      {
        Monday: { start: "09:00", finish: "17:00" },
        Tuesday: { start: "09:00", finish: "17:00" },
        Wednesday: { start: "09:00", finish: "17:00" },
        Thursday: { start: "09:00", finish: "17:00" },
        Friday: { start: "09:00", finish: "17:00" },
        Saturday: { start: "09:00", finish: "17:00" },
        Sunday: { start: "09:00", finish: "17:00" }
      }
    ]
  };

  handleChange = (e) => {
    // this.setState(rota[0]: {Monday.start: e.value})
    console.log(e.target.dataset.day + e.target.value);
    console.log(this.state.rota);
    
  }

  handleSubmit = (event) => {
    // this.setState({})
    console.log(event);

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Create ROTA for User</h1>
        {this.state.rota.map((week, index) => (
        //   let thisWeek = `Week ${index + 1}`;
        //   let rotaPosition = index + 1
          <RotaForm week={week} index={index} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        ))}
        <tr>
          <button onSubmit={this.handleChange}>Submit</button>
        </tr>
      </div>
    );
  }
}

const RotaForm = ({ week, index, handleSubmit, handleChange }) => (
    <form onSubmit={handleSubmit}>
              <tr>
                <h4>Week {index ++}</h4>
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
                    data-day='Monday'
                    type="time"
                    onChange={handleChange}
                    defaultValue={week.Monday.start}
                  />
                </td>
                <td>
                  <input type="time" defaultValue={week.Monday.finish} />
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Tuesday</h3>
                </td>
                <td>
                  <input type="time" defaultValue={week.Tuesday.start} />
                </td>
                <td>
                  <input type="time" defaultValue={week.Tuesday.finish} />
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Wednesday</h3>
                </td>
                <td>
                  <input type="time" defaultValue={week.Wednesday.start} />
                </td>
                <td>
                  <input type="time" defaultValue={week.Wednesday.finish} />
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Thursday</h3>
                </td>
                <td>
                  <input type="time" defaultValue={week.Thursday.start} />
                </td>
                <td>
                  <input type="time" defaultValue={week.Thursday.finish} />
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Friday</h3>
                </td>
                <td>
                  <input type="time" defaultValue={week.Friday.start} />
                </td>
                <td>
                  <input type="time" defaultValue={week.Friday.finish} />
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Saturday</h3>
                </td>
                <td>
                  <input type="time" defaultValue={week.Saturday.start} />
                </td>
                <td>
                  <input type="time" defaultValue={week.Saturday.finish} />
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Sunday</h3>
                </td>
                <td>
                  <input type="time" defaultValue={week.Sunday.start} />
                </td>
                <td>
                  <input type="time" defaultValue={week.Sunday.finish} />
                </td>
              </tr>
              <br />
            </form>
)

export default CreateRota