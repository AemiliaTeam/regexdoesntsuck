import React from 'react';

const ClearStrings = props => {
  return (
    <button className="ClearStrings" onClick={props.onClearStrings}>
      Clear all tests
    </button>
  );
};

export default ClearStrings;
