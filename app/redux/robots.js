import axios from 'axios';


//Action Constant
const SET_ROBOTS = 'SET_ROBOTS';
const GET_NEW_ROBOT = 'GET_NEW_ROBOT'
const DELETE_ROBOT = 'DELETE_ROBOT'

//Action Creator
export const setRobots = (robots) => ({
  type: SET_ROBOTS,
  robots,
});

export const getNewRobot = (robot) => ({
  type: GET_NEW_ROBOT,
  robot
})

export const deleteRobot = (robot) => ({
  type: DELETE_ROBOT,
  robot
})

//Thunk Creator which makes an axios get request to returns all robots
export const fetchRobots = () => async (dispatch) => {
  try {
    const { data: robots } = await axios.get('/api/robots');
    // console.log('5. robots.js->fetchRobots()->robot from axios---> ', robots)
    dispatch(setRobots(robots));
  } catch (err) {
    console.error(err);
  }
};

//Thunk Creator to makes axios post request
export const sendRobot = (robot) => async (dispatch) => {
  // console.log('sendRobot thunk')
  try {
    const { data: newRobot } = await axios.post('/api/robots', robot)
    // console.log('sendRobot thunk creator in robot.js ---->', newRobot)
    dispatch(getNewRobot(newRobot))
  } catch (err) {
    console.error(err)
  }
}

export const removedRobot = (robotId) =>
  async (dispatch) => {
    try {
      await axios.delete(`/api/robots/${robotId}`)
      // console.log('removedRobot()----> ', robotId)
      dispatch(deleteRobot(robotId))
    } catch (err) {
      console.error(err)
    }
  }

//Sets up iniitalState to default data type
const initialState = []

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers

//Reducer
export default function robotsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ROBOTS:
      return [...state, ...action.robots]; //seems to work. need to replicate for projects
    case GET_NEW_ROBOT:
      return [...state, action.robot]
    case DELETE_ROBOT:
      return state.filter(robot => robot.id !== action.robot)
    default:
      return state;
  }
}
