import React from 'react';

const Flags = props => {
  return (
    <fieldset>
      <legend>Flags:</legend>

      <input
        type="checkbox"
        id="insensitive"
        name="flags"
        value="i"
        onChange={event =>
          props.onFlagUpdate({
            value: event.target.value,
            checked: event.target.checked
          })
        }
      />
      <label htmlFor="insensitive">i</label>

      <input
        type="checkbox"
        id="global"
        name="flags"
        value="g"
        onChange={event =>
          props.onFlagUpdate({
            value: event.target.value,
            checked: event.target.checked
          })
        }
      />
      <label htmlFor="global">g</label>

      <input
        type="checkbox"
        id="multiline"
        name="flags"
        value="m"
        onChange={event =>
          props.onFlagUpdate({
            value: event.target.value,
            checked: event.target.checked
          })
        }
      />
      <label htmlFor="multiline">m</label>

      <input
        type="checkbox"
        id="unicode"
        name="flags"
        value="u"
        onChange={event =>
          props.onFlagUpdate({
            value: event.target.value,
            checked: event.target.checked
          })
        }
      />
      <label htmlFor="unicode">u</label>

      <input
        type="checkbox"
        id="sticky"
        name="flags"
        value="y"
        onChange={event =>
          props.onFlagUpdate({
            value: event.target.value,
            checked: event.target.checked
          })
        }
      />
      <label htmlFor="sticky">y</label>
    </fieldset>
  );
};

export default Flags;
