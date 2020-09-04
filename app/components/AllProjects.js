import React from 'react';
import { connect } from 'react-redux';
import  { fetchProjects }  from '../redux/projects'
import { Link } from 'react-router-dom'
import NewProjectForm  from './NewProjectForm';

// Notice that we're exporting the AllProjects component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllProjects extends React.Component {

 componentDidMount () {
    this.props.getProjects()
  }

  render() {
    // console.log('this.props---- ', this.props)
    const {allProjects} = this.props

    return (
      <div>
        <h1>Projects</h1>
        <ul>
        {
          allProjects.map(project => (
           <Link to={`projects/${project.id}` } key={project.id}>
           <p>{project.title}:  {project.deadline}</p>
           </Link>
          ))}
        </ul>
        <NewProjectForm />
      </div>
    )
  }
}

const mapState = (state) => {
  // console.log('mapState----- ', state)
  return {
    allProjects: state.projects
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProjects: () => dispatch(fetchProjects())
  };
};

export default connect(mapState, mapDispatch)(AllProjects);
