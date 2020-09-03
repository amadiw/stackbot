import React from 'react';
import { connect } from 'react-redux';
import { fetchRobots } from '../redux/robots';

// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.


export class AllRobots extends React.Component {
  componentDidMount() {
    this.props.getRobots();
    console.log('4. componentDidmount()------->', this.props)
  }

  render() {

    console.log('3. render() -> this.props-----> ',this.props)

    const {allRobots} = this.props
    return (
      <div>
        <h1>Robots</h1>
        <ul>
          {allRobots.map((robot) => (
            <li key={robot.id}>
              {' '}
              {robot.name}
              <img src={robot.imageUrl} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  console.log('1: mapState------->',state)
  return {
    allRobots: state.robots
  };
};


const mapDispatch = (dispatch) => {
  console.log('2: mapDispatch------->',dispatch)
  return {
    getRobots: () => dispatch(fetchRobots()),
  };
};

export default connect(mapState, mapDispatch)(AllRobots);
