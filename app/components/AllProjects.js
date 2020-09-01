import React from 'react';
import { connect } from 'react-redux';

// Notice that we're exporting the AllProjects component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllProjects extends React.Component {

  componentDidMount () {
    this.props.getProjects()
  }

  render() {
    // console.log('AllProjects.js------->> ',Object.keys(this.props))
    const { projects } = this.props

    return (
      <div>
        <h1>Projects</h1>
        <ul>
        {
          projects.map(project => (
           <li key={project.id}> {project.title}
           {project.deadline}
           </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapState = () => {
  return {};
};

const mapDispatch = () => {
  return {};
};

export default connect(mapState, mapDispatch)(AllProjects);
