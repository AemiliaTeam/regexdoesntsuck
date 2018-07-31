import React from 'react';

const ErrorMessage = props => {
  return (
    <div className="ErrorMessage">
      <span onClick={props.onClearError} className="ErrorMessage__icon">
        &#9447;
      </span>
      <p className="ErrorMessage__text">{props.errorMessage}</p>
    </div>
  );
};

export default ErrorMessage;
