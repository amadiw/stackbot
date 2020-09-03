import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import AllRobots from './AllRobots'
import AllProjects  from './AllProjects';

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
          <p></p>
          <Route exact path="/robots" component={AllRobots} />
          <Route exact path="/projects" component={AllProjects} />
        </main>
      </div>
    </Router>
  );
};

export default Routes;
