import React from 'react';

const Pattern = props => {
  return (
    <div className="Pattern">
      <input
        className="Pattern__input"
        type="text"
        placeholder="Enter a pattern"
        onChange={event => props.onPatternUpdate(event.target.value)}
      />
    </div>
  );
};

export default Pattern;
