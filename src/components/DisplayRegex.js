import React from 'react';

const DisplayRegex = props => {
  return (
    <div className="DisplayRegex">
      <h2 className="DisplayRegex__title">
        {!props.error ? `${props.regex}` : 'Invalid Regular Expression'}
      </h2>

      {props.allMatch ? (
        <p
          className="DisplayRegex__icon DisplayRegex__icon--yes"
          style={{ color: 'green' }}
        >
          &#x2714;
        </p>
      ) : (
        <p
          className="DisplayRegex__icon DisplayRegex__icon--no"
          style={{ color: 'red' }}
        >
          &times;
        </p>
      )}
    </div>
  );
};

export default DisplayRegex;
