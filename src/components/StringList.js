import React from 'react';
import StringItem from './StringItem';

const StringList = props => {
  const stringList = props.items.map((string, idx) => {
    return (
      <li className="StringList__item" key={idx}>
        <StringItem
          text={string.text}
          index={idx}
          match={string.match}
          onRemoveString={props.onRemoveString}
        />
      </li>
    );
  });

  return <ul className="StringList">{stringList}</ul>;
};

export default StringList;
