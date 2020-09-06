import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleRobot } from '../redux/singleRobot';
import UpdateRobot from './UpdateRobot';

export class SingleRobot extends React.Component {
  componentDidMount() {
    const { robotId } = this.props.match.params;
    this.props.gotSingleRobot(robotId);
  }

  render() {
    const {
      name,
      imageUrl,
      fuelType,
      fuelLevel,
      projects,
    } = this.props.singleRobot;
    return (
      <React.Fragment>
        <h1>{name}</h1>
        <img src={imageUrl} />
        <ul>
          <li>Fuel Type: {fuelType}</li>
          <li>Fuel Level: {fuelLevel}</li>
        </ul>
        <UpdateRobot />
        <h2>Projects</h2>
        <ul>
          {projects.map((project) => (
            <div key={project.id}>
            <Link to={`/projects/${project.id}`} >
              {project.title}
              <br />
            </Link>
            <button type="submit">Remove Project</button>
            </div>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

const mapState = (state) => {
  return {
    singleRobot: state.singleRobot,
  };
};

const mapDispatch = (dispatch) => {
  return {
    gotSingleRobot: (robotId) => dispatch(fetchSingleRobot(robotId)),
  };
};

export default connect(mapState, mapDispatch)(SingleRobot);
