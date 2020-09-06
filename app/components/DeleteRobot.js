import React from 'react';
import { connect } from 'react-redux';

export const DeleteRobot = (props) => {
  const { deleteRobot, id } = props;
  console.log(props, 'DeleteRobot')
  return (

    <button onClick={() => deleteRobot(id)} type="submit">
      X
    </button>
  );
};

export default connect(null, null)(DeleteRobot);
