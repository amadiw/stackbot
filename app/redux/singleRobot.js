import axios from 'axios';

//Action Constant
const SET_SINGLE_ROBOT = 'SET_SINGLE_ROBOT';
const UPDATE_SINGLE_ROBOT = 'UPDATE_SINGLE_ROBOT';

//Action Creator
export const setSingleRobot = (singleRobot) => ({
  type: SET_SINGLE_ROBOT,
  singleRobot

});

export const updateSingleRobot = (id, name) => ({
  type: UPDATE_SINGLE_ROBOT,
  id,
  name
});

//Thunk Creators
export const fetchSingleRobot = (robotId) => async (dispatch) => {
  try {
    console.log('fetchingSingleRobot() ---> ', robotId)
    const { data: robot } = await axios.get(`/api/robots/${robotId}`);
    dispatch(setSingleRobot(robot));
  } catch (err) {
    console.error(err);
  }
};

export const updatingSingleRobot = (robotId, name) => async (dispatch) => {
  try {
    await axios.put(`/api/robots/${robotId}`, name);
    dispatch(updateSingleRobot(robotId, name));
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
      return { ...state, ...action.name};
    default:
      return state;
  }
}
