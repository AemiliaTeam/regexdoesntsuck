import React from 'react';

import Pattern from './Pattern';
import Flags from './Flags';

const FormContainer = props => {
  return (
    <div>
      <form>
        <Pattern onPatternUpdate={props.onPatternUpdate} />
        <Flags onFlagUpdate={props.onFlagUpdate} />
      </form>
    </div>
  );
};

export default FormContainer;