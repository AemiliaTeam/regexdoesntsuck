import React from 'react';

const StringItem = props => {
  return (
    <div className="StringItem">
      <p
        className={
          'StringItem__text' + props.match ? 'doesMatch' : 'doesNotMatch'
        }
      >
        {props.text}
      </p>
      <button
        className="StringItem__button"
        onClick={e => props.onRemoveString(e, props.text)}
      >
        &times;
      </button>
    </div>
  );
};

export default StringItem;
