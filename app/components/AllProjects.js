import React from 'react';
import { connect } from 'react-redux';
import  { fetchProjects }  from '../redux/projects'

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
           <li key={project.id}> {project.title}
           <div></div>
           {project.deadline}
           </li>
          ))}
        </ul>
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
