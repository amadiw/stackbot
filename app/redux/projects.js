import axios from 'axios';

//Action Constants
const SET_PROJECTS = 'SET_PROJECTS';
const GET_NEW_PROJECT = 'GET_NEW_PROJECT';
const DELETE_PROJECT = 'DELETE_PROJECT';

//Action Creators
export const setProjects = (projects) => ({
  type: SET_PROJECTS,
  projects,
});

export const getNewProject = (project) => ({
  type: GET_NEW_PROJECT,
  project,
});

export const deleteProject = (project) => ({
  type: DELETE_PROJECT,
  project,
});

//Thunk Creators
export const fetchProjects = () => async (dispatch) => {
  try {
    const { data: projects } = await axios.get('/api/projects');
    dispatch(setProjects(projects));
  } catch (err) {
    console.error(err);
  }
};

export const sendProject = (project) => async (dispatch) => {
  try {
    const { data: newProject } = await axios.post('/api/projects', project);
    dispatch(getNewProject(newProject));
  } catch (err) {
    console.error(err);
  }
};

export const removedProject = (projectId) => async (dispatch) => {
  try {
    await axios.delete(`/api/projects/${projectId}`);
    dispatch(deleteProject(projectId));
  } catch (err) {
    console.error(err);
  }
};

//Sets up initialState
const initialState = [];

//Projects Reducer
export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECTS:
      return [...action.projects];
    case GET_NEW_PROJECT:
      return [...state, action.project];
    case DELETE_PROJECT:
      return state.filter((project) => project.id !== action.project);
    default:
      return state;
  }
}
