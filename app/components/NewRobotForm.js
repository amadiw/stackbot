import React from "react";
import { connect } from "react-redux";
import { sendRobot } from "../redux/robots";

 export class NewRobotForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const newRobot = event.target.name.value;
    // console.log('----------newRobot handleSubmit()', newRobot);
    // console.log('NewRobotForm.js_handleSubmit_this.props--> ', this.props)
    this.props.gotRobot({
      name: newRobot,
    });
  }

  render() {
    // console.log("NewRobotForm props.... ", this.props);
    return (
      <div>
        <h1>Add new robot</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" />
          <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}

const mapState = (state) => {
  // console.log('NewRobotForm.js_mapState ---->', state)
  return {
    allRobots: state.robots
  }
}

const mapDispatch = (dispatch) => {
  // console.log('----NewRobotForm-mapDispatch', dispatch);
  return {
    gotRobot: (robot) => dispatch(sendRobot(robot)),
  };
};

export default connect(mapState, mapDispatch)(NewRobotForm);
