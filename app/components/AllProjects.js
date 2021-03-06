import React from 'react';
import { connect } from 'react-redux';
import { fetchProjects, removedProject } from '../redux/projects';
import { Link } from 'react-router-dom';
import NewProjectForm from './NewProjectForm';
import DeleteProject from './DeleteProject';

export class AllProjects extends React.Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { allProjects } = this.props;
    return (
      <React.Fragment>
        <h1>Projects</h1>
        <ul>
          {allProjects.map((project) => (
            <div key={project.id}>
              <Link to={`projects/${project.id}`}>
                <p>{project.title}</p>
              </Link>
              Due: {project.deadline}
              <p />
              <DeleteProject
                id={project.id}
                deleteProject={this.props.deleteProject}
              />
            </div>
          ))}
        </ul>
        <NewProjectForm />
      </React.Fragment>
    );
  }
}

const mapState = (state) => {
  return {
    allProjects: state.projects,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProjects: () => dispatch(fetchProjects()),
    deleteProject: (id) => dispatch(removedProject(id)),
  };
};

export default connect(mapState, mapDispatch)(AllProjects);
