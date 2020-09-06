import React from 'react';
import { fetchSingleProject } from '../redux/singleProject';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UpdateProject from './UpdateProject';

export class SingleProject extends React.Component {
  componentDidMount() {
    const { projectId } = this.props.match.params;
    this.props.gotSingleProject(projectId);
  }

  render() {
    const {
      title,
      deadline,
      priority,
      description,
      robots,
      completed,
    } = this.props.singleProject;

    return (
      <React.Fragment>
        <div>
          <h1>{title}</h1>
          <ul>
            <li>Deadline: {deadline}</li>
            <li>Priority: {priority}</li>
            <li>Description: {description}</li>
            <li>Completed: {completed + ''}</li>
          </ul>
          <UpdateProject />
          <h2>Robots</h2>
          <ul>
            {robots.map((robot) => (
              <div key={robot.id}>
                <Link to={`/robots/${robot.id}`}>{robot.name}</Link>
                <br />
                <button type="submit">Remove Robot</button>
              </div>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const mapState = (state) => {
  return {
    singleProject: state.singleProject,
  };
};

const mapDispatch = (dispatch) => {
  return {
    gotSingleProject: (projectId) => dispatch(fetchSingleProject(projectId)),
  };
};

export default connect(mapState, mapDispatch)(SingleProject);
