import React from 'react';

const Position = (props) => {
  return (
    <label style={{ marginBottom: '7px' }}>
      <input
        data-id={props.id}
        name='position_id'
        type='radio'
        value={props.id}
        onChange={props.onChange}
      />{' '}
      {props.posName}
    </label>
  );
};

export default Position;
