import React from 'react';
import { fetchSingleProject } from '../redux/singleProject';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

export class SingleProject extends React.Component {
  componentDidMount() {
    const { projectId } = this.props.match.params;

    this.props.gotSingleProject(projectId);

    console.log('4: componentDidMount()', this.props);
  }

  render() {
    console.log('3: render(): this.props---> ', this.props);

    const { title, deadline, priority, description, robots } = this.props.singleProject;

    return (
      <div>
         <h1>{title}</h1>
        <ul>
          <li>Deadline: {deadline}</li>
          <li>Priority: {priority}</li>
          <li>DescriptionL {description}</li>
        </ul>
        <h2>Robots</h2>
        <ul>
          {robots.map((robot) => (


            <Link to={`/robots/${robot.id}`} key={robot.id}> {robot.name} <br></br> </Link>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  console.log('1: mapState');
  return {
    singleProject: state.singleProject,
  };
};

const mapDispatch = (dispatch) => {
  console.log('2: mapDispatch');
  return {
    gotSingleProject: (projectId) => dispatch(fetchSingleProject(projectId)),
  };
};

export default connect(mapState, mapDispatch)(SingleProject);
