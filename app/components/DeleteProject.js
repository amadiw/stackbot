import React from 'react';
import { connect } from 'react-redux';

export const DeleteProject = (props) => {
  const { deleteProject, id } = props;
  return (
    <button onClick={() => deleteProject(id)} type="submit">
      X
    </button>
  );
};

export default connect(null, null)(DeleteProject);
