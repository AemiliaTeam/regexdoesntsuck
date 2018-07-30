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
  const isEmpty = stringList.length > 0;

  return (
    <div>
      {isEmpty ? (
        <ul className="StringList">{stringList}</ul>
      ) : (
        <p className="StringList__empty">Add a test to get started</p>
      )}
    </div>
  );
};

export default StringList;
