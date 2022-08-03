import React from 'react';
import { Button } from 'react-bootstrap';
import cl from './InputPhoto.module.scss';

const InputPhoto = (props) => {
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <>
      <button className={cl.photoBtn} onClick={handleClick}>
        Upload
      </button>
      <input
        {...props}
        type='file'
        ref={hiddenFileInput}
        style={{ display: 'none' }}
        accept='.jpg, .jpeg'
      />
    </>
  );
};

export default InputPhoto;
