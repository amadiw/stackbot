import axios from 'axios'

//Action Constants
const SET_PROJECTS = 'SET_PROJECTS'
const GET_NEW_PROJECT = 'GET_NEW_PROJECT'

//Action Creators
export const setProjects = (projects) => ({
  type: SET_PROJECTS,
  projects
});

export const getNewProject = (project) => ({
  type: GET_NEW_PROJECT,
  project
})

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

export const sendProject = (project) =>
  async (dispatch) => {
    console.log('5. HELLO FROM sendProject THUNK')
    try {
      const { data: newProject } = await axios.post('/api/projects', project)
      console.log('6. sendProject() thunk------> ', newProject)
      dispatch(getNewProject(newProject))
    } catch (err) {
      console.error(err)
    }
  }

//Sets up initialState
const initialState = []

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers

//Projects Reducer
export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECTS:
      return action.projects
    case GET_NEW_PROJECT:
      return [...state, action.project]
    default:
      return state
  }
}
