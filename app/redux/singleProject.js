import axios from 'axios';

//Action Constant
const SET_SINGLE_PROJECT = 'SET_SINGLE_PROJECT';

//Action Creator
export const setSingleProject = (singleProject) => ({
  type: SET_SINGLE_PROJECT,
  singleProject,
});

//Thunk Creator
export const fetchSingleProject = (projectId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/projects/${projectId}`);
    dispatch(setSingleProject(data));
  } catch (err) {
    console.error(err);
  }
};

//Defining initial State
const initialState = {
  title: '',
  deadline: '',
  priority: '',
  description: '',
  robots: [],
};

//Reducer
export default function singleProjectReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_PROJECT:
      return { ...state, ...action.singleProject };
    default:
      return state;
  }
}
