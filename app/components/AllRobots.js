import React from 'react';
import { connect } from 'react-redux';
import { fetchRobots,  removedRobot} from '../redux/robots';
import { Link } from 'react-router-dom';
import NewRobotForm from './NewRobotForm';
import DeleteRobot from './DeleteRobot'


// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.

export class AllRobots extends React.Component {
  componentDidMount() {
    this.props.getRobots();
  }

  render() {
    const { allRobots } = this.props;

    return (
      <React.Fragment>
        <h1>Robots</h1>
        {allRobots.map((robot) => (
          <div key={robot.id}>
            <Link to={`robots/${robot.id}`}>
              {robot.name}
              <img src={robot.imageUrl} />
            </Link>
            <DeleteRobot id={robot.id} deleteRobot={this.props.deleteRobot} />
          </div>
        ))}
        <NewRobotForm />
      </React.Fragment>
    );
  }
}

const mapState = (state) => {
  return {
    allRobots: state.robots,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getRobots: () => dispatch(fetchRobots()),
    deleteRobot: (id) => dispatch(removedRobot(id))

  };
};

export default connect(mapState, mapDispatch)(AllRobots);
