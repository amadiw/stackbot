import React from 'react';
import { connect } from 'react-redux';

export const DeleteRobot = (props) => {
  const { deleteRobot, id } = props;
  return (
    <button onClick={() => deleteRobot(id)} type="submit">
      X
    </button>
  );
};

export default connect(null, null)(DeleteRobot);
