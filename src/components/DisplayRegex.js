import React from 'react';

const DisplayRegex = props => {
  return (
    <div className="DisplayRegex">
      <div
        className={`DisplayRegex__container ${
          props.allMatch
            ? 'DisplayRegex__container--yes'
            : 'DisplayRegex__container--no'
        }`}
      >
        <h2 className="DisplayRegex__title">
          {!props.error ? `${props.regex}` : 'Invalid Regular Expression'}
        </h2>

        {props.allMatch ? (
          <span className="DisplayRegex__icon DisplayRegex__icon--yes">
            &#x2714;
          </span>
        ) : (
          <span className="DisplayRegex__icon DisplayRegex__icon--no">
            &times;
          </span>
        )}
      </div>
    </div>
  );
};

export default DisplayRegex;
