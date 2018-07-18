import React from 'react';

const Flags = props => {
  return (
    <form>
      <fieldset>
        <legend>Flags:</legend>

        <input
          type="checkbox"
          id="insensitive"
          name="flags"
          value="i"
          onChange={event => props.onFlagUpdate({
            value: event.target.value,
            checked: event.target.checked
          })} />
        <label htmlFor="insensitive">i</label>

        <input
          type="checkbox"
          id="global"
          name="flags"
          value="g"
          onChange={event => props.onFlagUpdate({
            value: event.target.value,
            checked: event.target.checked
          })} />
        <label htmlFor="global">g</label>
      </fieldset>
    </form>
  );
};

export default Flags;