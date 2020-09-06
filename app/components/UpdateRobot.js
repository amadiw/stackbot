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
    const name = event.target.name.value
    const fuelLevel = event.target.fuelLevel.value
    const { id } = this.props.singleRobot
    console.log('handleSubmit fuelLevel---> ', event.target.fuelLevel.value)
    this.props.updatedRobot(id, {name, fuelLevel})
  }

  render() {
    console.log('render()', this.props)
    return (
      <React.Fragment>
      <h1>Update Robot</h1>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" />
        <p />
        <label htmlFor="fuelLevel">Fuel Level: </label>
        <input type="text" name="fuelLevel" />
        <p></p>
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
    updatedRobot: (robotId, name) => dispatch(updatingSingleRobot(robotId, name))
  }
}

export default connect(mapState, mapDispatch)(UpdateRobot)
