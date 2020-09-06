import React from 'react';
import { connect } from 'react-redux';
import { sendProject } from '../redux/projects';

export class NewProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const title = event.target.title.value;
    this.props.gotProject({
      title,
    });
  }

  render() {
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
  return {
    allProjects: state.projects,
  };
};

const mapDispatch = (dispatch) => {
  return {
    gotProject: (project) => dispatch(sendProject(project)),
  };
};

export default connect(mapState, mapDispatch)(NewProjectForm);
