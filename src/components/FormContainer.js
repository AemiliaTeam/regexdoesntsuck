import React from 'react';

import Pattern from './Pattern';
import Flags from './Flags';

const FormContainer = props => {
  return (
    <form className="FormContainer">
      <Pattern onPatternUpdate={props.onPatternUpdate} />
      <Flags onFlagUpdate={props.onFlagUpdate} />
    </form>
  );
};

export default FormContainer;
