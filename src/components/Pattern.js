import React from 'react';

const Pattern = props => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a pattern"
        onChange={(event) => props.onPatternUpdate(event.target.value)}/>
    </div>
  );
};

export default Pattern;