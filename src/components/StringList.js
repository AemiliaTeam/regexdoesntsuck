import React from 'react';
import StringItem from './StringItem';

const StringList = props => {
  const stringList = props.items.map((string, idx) => {
    return (
      <li key={idx}>
        <StringItem
          text={string.text}
          index={idx}
          match={string.match}
          onRemoveString={props.onRemoveString}
        />
      </li>
    );
  });

  return <ul>{stringList}</ul>;
};

export default StringList;
