import React from 'react';

const StringItem = props => {
  return (
    <div>
      <p className={props.match ? 'doesMatch' : 'doesNotMatch'}>{props.text}</p>
      <button onClick={e => props.onRemoveString(e, props.text)}>
        &times;
      </button>
    </div>
  );
};

export default StringItem;
