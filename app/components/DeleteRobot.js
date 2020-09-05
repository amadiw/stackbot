import React from "react";
import { connect } from 'react-redux';
import { removedRobot } from "../redux/robots";

export class DeleteRobot extends React.Component {
  // constructor() {
  //   super()
  //   // this.handleClick = this.handleClick.bind(this)
  // }

  // handleClick(event) {
  //   event.preventDefault();
  //   this.props.deleteRobot(this.props.id)
  // }

  render() {
    console.log('render() this.props ', this.props)
    const { deleteRobot, id } = this.props

    return (
      // <h1>HELLO FROM DELETEROBOTS</h1>
      <button onClick={() => deleteRobot(id)} type="submit">
              X
            </button>
    )
  }
}

// const mapState = (state) => {
//   console.log('3. mapState ----> ', state)
//   return {
//     allRobots: state.robots
//   }
// }

const mapDispatch = (dispatch) => {
  console.log("2: mapDispatch------->", dispatch);
  return {
    deleteRobot: (id) => dispatch(removedRobot(id)),
  };
};

export default connect(null, mapDispatch)(DeleteRobot)
