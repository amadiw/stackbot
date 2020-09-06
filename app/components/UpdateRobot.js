import React from 'react'
import { connect } from 'react-redux'
import { updatingSingleRobot } from '../redux/singleRobot'

export class UpdateRobot extends React.Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const updatedName = event.target.name.value
    this.props.updatedRobot({
      name: updatedName
    })
  }

  render() {
    return (
      <React.Fragment>
      <h1>Update Robot</h1>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" />
        <p />
        <select>
          <option value="electric">Electric</option>
          <option value="diesel">Diesel</option>
          <option value="gas">Gas</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      </React.Fragment>
    )
  }
}

const mapState = (state) => {
  return {
    singleRobot: state.singleRobot
  }
}

const mapDispatch = (dispatch) => {
  return {
    updatedRobot: (robot) => dispatch(updatingSingleRobot(robot))
  }
}

export default connect(mapState, mapDispatch)(UpdateRobot)
