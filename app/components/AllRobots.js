import React from 'react';
import { connect } from 'react-redux';
import { fetchRobots } from '../redux/robots';

// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.

export class AllRobots extends React.Component {
  componentDidMount() {
    this.props.gotRobots();
    // console.log('componentDidMount ran----------')
  }

  render() {
    // console.log('Render: this.props from AllRobots.js ------> ', this.props.robots)

    // return <div />;
    // console.log('AllRobots.js------->> ',Object.keys(this.props))
    const robots = this.props.allRobots;
    // console.log(robots)
    return (
      <div>
        <h1>Robots</h1>
        <ul>
          {robots.map((robot) => (
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
  return {
    robots: state.allRobots,
  };
};

const mapDispatch = (dispatch) => {
  return {
    gotRobots: () => dispatch(fetchRobots()),
  };
};

export default connect(mapState, mapDispatch)(AllRobots);
