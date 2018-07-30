import React from 'react';

const AddString = props => {
  return (
    <form onSubmit={props.onAddString}>
      <input type="text" name="string" />
      <button>Add</button>
    </form>
  );
};

export default AddString;
