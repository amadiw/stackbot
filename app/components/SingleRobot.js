import React from 'react';
import { fetchSingleRobot } from '../redux/singleRobot';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

export class SingleRobot extends React.Component {
  componentDidMount() {
    const { robotId } = this.props.match.params;

    this.props.gotSingleRobot(robotId);

    console.log('4: componentDidMount()', this.props);
  }

  render() {
    console.log('3: render(): this.props---> ', this.props);
    const {
      name,
      imageUrl,
      fuelType,
      fuelLevel,
      projects,
    } = this.props.singleRobot;

    return (
      <div>
        <h1>{name}</h1>
        <img src={imageUrl} />
        <ul>
          <li>Fuel Type: {fuelType}</li>
          <li>Fuel Level: {fuelLevel}</li>
        </ul>
        <h2>Projects</h2>

        <ul>
          {projects.map((project) => (
            <Link to={`/projects/${project.id}`} key={project.id}>{project.title}<br></br></Link>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  console.log('1: mapState');
  return {
    singleRobot: state.singleRobot,
  };
};

const mapDispatch = (dispatch) => {
  console.log('2: mapDispatch');
  return {
    gotSingleRobot: (robotId) => dispatch(fetchSingleRobot(robotId)),
  };
};

export default connect(mapState, mapDispatch)(SingleRobot);
