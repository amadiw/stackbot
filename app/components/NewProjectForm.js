import React from "react";
import { connect } from "react-redux";
import { sendProject } from "../redux/projects";

 export class NewProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const newProject = event.target.title.value;
    console.log('3. handSubmit: newProject--> ', newProject)
    console.log('4. this.props-_-_-_-> ',this.props )

    this.props.gotProject({
      title: newProject,
    });
  }

  render() {
    console.log("2. NewprojectForm props render().... ", this.props);
    return (
      <div>
        <h1>Add new project</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Title: </label>
          <input type="text" name="title" />
          <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}

const mapState = (state) => {
  // console.log('NewprojectForm.js_mapState ---->', state)
  return {
    allProjects: state.projects
  }
}

const mapDispatch = (dispatch) => {
  console.log('1. NewprojectForm-mapDispatch', dispatch);
  return {
    gotProject: (project) => dispatch(sendProject(project)),
  };
};

export default connect(mapState, mapDispatch)(NewProjectForm);
