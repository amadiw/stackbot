import axios from 'axios';

//Action Constant
const SET_SINGLE_ROBOT = 'SET_SINGLE_ROBOT';
const UPDATE_SINGLE_ROBOT = 'UPDATE_SINGLE_ROBOT';

//Action Creator
export const setSingleRobot = (singleRobot) => ({
  type: SET_SINGLE_ROBOT,
  singleRobot,
});

export const updateSingleRobot = (singleRobot) => ({
  type: UPDATE_SINGLE_ROBOT,
  singleRobot,
});

//Thunk Creators
export const fetchSingleRobot = (robotId) => async (dispatch) => {
  try {
    const { data: robot } = await axios.get(`/api/robots/${robotId}`);
    dispatch(setSingleRobot(robot));
  } catch (err) {
    console.error(err);
  }
};

export const updatingSingleRobot = (robotId) => async (dispatch) => {
  try {
    const { data: robot } = await axios.put(`/api/robots${robotId}`);
    console.log('singleRobot.js updatingSingleRobot()-->', robot);
    dispatch(updateSingleRobot(robot));
  } catch (err) {
    console.error(err);
  }
};

//Sets initial State
const initialState = {
  name: '',
  imageurl: '',
  fuelLevel: '',
  fuelType: '',
  projects: [],
};

//Reducer
export default function singleRobotReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_ROBOT:
      return { ...state, ...action.singleRobot };
    case UPDATE_SINGLE_ROBOT:
      return { ...state, ...action.singleRobot };
    default:
      return state;
  }
}
