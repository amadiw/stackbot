import React from 'react'
import { connect } from 'react-redux'

export const DeleteProject = (props) => {
console.log('DeleteProject() this.props--->', props)
const { deleteProject, id } = props

  return (
    <button onClick={() => deleteProject(id)} type="submit">X</button>
  )
}

export default connect(null, null)(DeleteProject)
