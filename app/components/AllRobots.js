import React from 'react';
import { connect } from 'react-redux';

// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.


export class AllRobots extends React.Component {

       componentDidMount () {
      this.props.getRobots()
    }

  render() {
    // return <div />;
    // console.log('AllRobots.js------->> ',Object.keys(this.props))
    const { robots } = this.props
    return (
      <div>
        <h1>Robots</h1>
        <ul>
        {
          robots.map(robot => (
           <li key={robot.id}> {robot.name}
           <img src={robot.imageUrl} />
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

export default connect(mapState, mapDispatch)(AllRobots);
