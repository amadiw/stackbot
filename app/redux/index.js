import { combineReducers } from 'redux';
import projectsReducer from './projects';
import robotsReducer from './robots';
import singleRobotReducer from './singleRobot'

const appReducer = combineReducers({
  projects: projectsReducer,
  robots: robotsReducer,
  singleRobot: singleRobotReducer
});

export default appReducer;

/* True structure of inital state in Store
    {
      projects: [],
      robots:[],
      singleRobot: {}
    }

    state.projects.allProjects*/

   /* {
     projects:
      allprojects: [],
    robots:
      allrobots: [],
    singlerobot: {
      name: '',
      fuel:,
      projects: []
    }
   }  */
