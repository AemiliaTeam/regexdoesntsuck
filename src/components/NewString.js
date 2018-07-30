import React from 'react';

const NewString = props => {
  let e;
  return (
    <form onSubmit={props.onAddString}>
      <input type="text" name="string" />
      <button>Add</button>
    </form>
  );
};

export default NewString;
