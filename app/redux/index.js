import { combineReducers } from 'redux';
import projectsReducer from './projects';
import robotsReducer from './robots';

const appReducer = combineReducers({
  projects: projectsReducer,
  robots: robotsReducer,
});

export default appReducer;

/* True structure of inital state in Store
    {
      projects: {
        allProjects: []
      },
      robots: {
        allRobots: []
      }
    }

    state.projects.allProjects*/
