import React, { forwardRef } from 'react';
import './PickFile.css';

const PickFile = forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      type="file"
      className="pick-file"
      accept="image/*"
      onChange={props.onChange}
    />
  );
});

export default PickFile;
