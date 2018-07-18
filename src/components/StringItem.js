import React from 'react';

const StringItem = props => {
  return (
    <p className={props.match ? "doesMatch" : "doesNotMatch"}>
      {props.text}
    </p>
  );
};

export default StringItem;