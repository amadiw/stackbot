import React from 'react';
import { connect } from 'react-redux';
import { getRobots } from '../redux/robots';

// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.

export class AllRobots extends React.Component {
  componentDidMount() {
    this.props.fetchRobots();
    console.log('componentDidMount ran----------')
  }

  render() {
    console.log('this.props from AllRobots.js ------> ', this.props)

    // return <div />;
    // console.log('AllRobots.js------->> ',Object.keys(this.props))
    const robots = this.props.allRobots;
    // console.log(robots)
    return (
      <div>
        <h1>Robots</h1>
        <ul>
          {/* {robots.map((robot) => (
            <li key={robot.id}>
              {' '}
              {robot.name}
              <img src={robot.imageUrl} />
            </li>
          ))} */}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    allRobots: state.allRobots,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchRobots: () => dispatch(getRobots()),
  };
};

export default connect(mapState, mapDispatch)(AllRobots);
