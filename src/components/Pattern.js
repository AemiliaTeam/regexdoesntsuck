import React from 'react';

const Pattern = props => {
  return (
    <div className="Pattern">
      <label className="Pattern__label" htmlFor="pattern-input">
        Pattern:
      </label>
      <input
        className="Pattern__input"
        id="pattern-input"
        type="text"
        placeholder="Enter some Regex"
        onChange={event => props.onPatternUpdate(event.target.value)}
      />
    </div>
  );
};

export default Pattern;
