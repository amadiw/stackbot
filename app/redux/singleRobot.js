import axios from 'axios';



//Action Constant
const SET_SINGLE_ROBOT = 'SET_SINGLE_ROBOT'

//Action Creator
export const setSingleRobot = (singleRobot) => ({
  type: SET_SINGLE_ROBOT,
  singleRobot
})

//Thunk Creator which makes an axios call to database and returns single robot & their projects


export const fetchSingleRobot = (robotId) => async (dispatch) => {
  try {
    const {data} = await axios.get(`/api/robots/${robotId}`)
    console.log('5. fetchSingleRobot thunk---> ', data)
    dispatch(setSingleRobot(data))
  } catch (err) {
    console.error(err)
  }
}

//Defining initial State
const initialState = {
  name: '',
  imageurl: '',
  fuelLevel: '',
  fuelType: '',
  projects: []
}

//Reducer
export default function singleRobotReducer (state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_ROBOT:
      return action.singleRobot
    default:
      return state
  }
}
