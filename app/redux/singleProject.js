import axios from 'axios';

//Action Constant
const SET_SINGLE_PROJECT = 'SET_SINGLE_PROJECT';
const UPDATE_SINGLE_PROJECT = 'UPDATE_SINGLE_PROJECT'
const MARK_COMPLETED = 'MARK_COMPLETED'

//Action Creator
export const setSingleProject = (singleProject) => ({
  type: SET_SINGLE_PROJECT,
  singleProject,
});

export const updateSingleProject = (id, title, completed) => ({
  type: UPDATE_SINGLE_PROJECT,
  id,
  title,
  completed
})

export const markSingleProjectComplete = (id, completed) => ({
  type: MARK_COMPLETED,
  id,
  completed
})
//Thunk Creator
export const fetchSingleProject = (projectId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/projects/${projectId}`);
    dispatch(setSingleProject(data));
  } catch (err) {
    console.error(err);
  }
};

export const updatingSingleProject = (id, title, completed) => async (dispatch) => {
  try {
    await axios.put(`/api/projects/${id}`, title, completed)
    dispatch(updateSingleProject(id, title, completed))
  } catch (err) {
    console.error(err)
  }
}

export const markingCompleted = (id, completed) => async (dispatch) => {
  try {
    await axios.put(`/api/projects/${id}`, completed)
    dispatch(markSingleProjectComplete((id, completed)))
  } catch (err) {
    console.error(err)
  }
}

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
    case UPDATE_SINGLE_PROJECT:
      return {...state, ...action.id, ...action.title, ...action.completed}
    case MARK_COMPLETED:
      return {...state, ...action.id, ...action.completed}
    default:
      return state;
  }
}
