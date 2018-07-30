import React from 'react';

const AddString = props => {
  return (
    <form className="AddString" onSubmit={props.onAddString}>
      <input
        className="AddString__input"
        type="text"
        name="string"
        placeholder="Enter a test string"
      />
      <button className="AddString__button">Add</button>
    </form>
  );
};

export default AddString;
