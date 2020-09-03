import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import AllRobots from './AllRobots'
import AllProjects  from './AllProjects';
import SingleRobot from './SingleRobot'

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>Welcome!
       <Link className="linkColor" to="/robots">Robots</Link>
       <Link className="linkColor"  to="/projects">Projects</Link>
        </nav>
        <main>
          <h1>
            Welcome to StackBot Project Management: your robot employees are
            awaiting assignments!
          </h1>
          <Route exact path="/robots" component={AllRobots} />
          <Route exact path="/projects" component={AllProjects} />
          <Route path="/robots/:robotId" component={SingleRobot} />
        </main>
      </div>
    </Router>
  );
};

export default Routes;
