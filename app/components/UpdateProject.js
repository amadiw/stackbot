import React from 'react'
import { connect } from 'react-redux'
import { updatingSingleProject } from '../redux/singleProject'

export class UpdateProject extends React.Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const { id } = this.props.singleProject
    const title = event.target.title.value
    const completed = event.target.completed.value
    this.props.updatedProject(id, {title, completed})
  }

  render () {
    return (
      <React.Fragment>
      <h1>Update Project</h1>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" />
        <p />
        <label htmlFor="completed">Completed: </label>
        <input type="text" name="completed" />
        <p></p>
        <button type="submit">Submit</button>
      </form>
      </React.Fragment>

    )
  }

}

const mapState = (state) => {
  return {
    singleProject: state.singleProject
  }
}

const mapDispatch = (dispatch) => {
  return {
    updatedProject: (id, title) => dispatch(updatingSingleProject(id, title))
  }
}

export default connect(mapState, mapDispatch)(UpdateProject)
