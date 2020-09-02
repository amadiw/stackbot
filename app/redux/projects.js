import axios from 'axios'

//Action Constant declared
const SET_PROJECTS = 'SET_PROJECTS'

//Action Creator
export const setProjects = (projects) => ({
  type: SET_PROJECTS,
  projects
});

//Thunk creator which uses an axios call to return all Projects
export const fetchProjects = () =>
  async (dispatch) => {
  try {
    const { data: projects } = await axios.get('/api/projects')
    // console.log('------------- ',projects)//returns array of test obs
    dispatch(setProjects(projects))
  } catch (err) {
    console.error(err)
  }
};

//Sets up initialState
const initialState = {
  allProjects: []
}

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers

//Projects Reducer
export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECTS:
      return {...state, allProjects: action.projects}
    default:
      return state
  }
}
