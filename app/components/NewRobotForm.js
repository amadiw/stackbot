import React from 'react';
import { connect } from 'react-redux';
import { sendRobot } from '../redux/robots';

export class NewRobotForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = event.target.name.value;
    this.props.gotRobot({
      name,
    });
  }

  render() {
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
  return {
    allRobots: state.robots,
  };
};

const mapDispatch = (dispatch) => {
  return {
    gotRobot: (robot) => dispatch(sendRobot(robot)),
  };
};

export default connect(mapState, mapDispatch)(NewRobotForm);
