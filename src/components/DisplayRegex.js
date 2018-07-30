import React from 'react';

const DisplayRegex = props => {
  return (
    <div>
      <h2>{!props.error ? `${props.regex}` : 'Invalid Regular Expression'}</h2>

      {props.allMatch ? (
        <p style={{ color: 'green' }}>&#x2714;</p>
      ) : (
        <p style={{ color: 'red' }}>&times;</p>
      )}
    </div>
  );
};

export default DisplayRegex;
