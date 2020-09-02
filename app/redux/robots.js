import axios from 'axios';
//Action Constant
const SET_ROBOTS = 'SET_ROBOTS';

//Action Creator
export const setRobots = (robots) => ({
  type: SET_ROBOTS,
  robots,
});

//Thunk Creator which makes an axios call to the database and returns all robots
export const fetchRobots = () => async (dispatch) => {
  // console.log('robots.js: fetchRobots thunk creator------->')
  try {
    const { data: robots } = await axios.get('/api/robots');

    dispatch(setRobots(robots));
    // console.log('hello from robot.js thunk creator')
  } catch (err) {
    console.error(err);
  }
};

//Sets up iniitalState to default data type
const initialState = {
  allRobots: [],
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers

//Reducer
export default function robotsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ROBOTS:
      // return {...state, allRobots: action.robots}
      return {...state, allRobots: action.robots};
    default:
      return state;
  }
}
