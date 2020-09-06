import axios from 'axios';

//Action Constant
const SET_ROBOTS = 'SET_ROBOTS';
const GET_NEW_ROBOT = 'GET_NEW_ROBOT';
const DELETE_ROBOT = 'DELETE_ROBOT';

//Action Creator
export const setRobots = (robots) => ({
  type: SET_ROBOTS,
  robots,
});

export const getNewRobot = (robot) => ({
  type: GET_NEW_ROBOT,
  robot,
});

export const deleteRobot = (robot) => ({
  type: DELETE_ROBOT,
  robot,
});

//Thunk Creators
export const fetchRobots = () => async (dispatch) => {
  try {
    const { data: robots } = await axios.get('/api/robots');
    dispatch(setRobots(robots));
  } catch (err) {
    console.error(err);
  }
};

export const sendRobot = (robot) => async (dispatch) => {
  try {
    const { data: newRobot } = await axios.post('/api/robots', robot);
    dispatch(getNewRobot(newRobot));
  } catch (err) {
    console.error(err);
  }
};

export const removedRobot = (robotId) => async (dispatch) => {
  try {
    await axios.delete(`/api/robots/${robotId}`);
    dispatch(deleteRobot(robotId));
  } catch (err) {
    console.error(err);
  }
};

//Sets up iniitalState
const initialState = [];

//Reducer
export default function robotsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ROBOTS:
      return [...action.robots];
    case GET_NEW_ROBOT:
      return [...state, action.robot];
    case DELETE_ROBOT:
      return state.filter((robot) => robot.id !== action.robot);
    default:
      return state;
  }
}
