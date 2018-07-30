import React from 'react';

const Flags = props => {
  return (
    <fieldset className="Flags">
      <legend className="Flags__legend">Flags:</legend>

      <input
        className="Flags__checkbox"
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
      <label className="Flags__label" htmlFor="insensitive">
        i
      </label>

      <input
        className="Flags__checkbox"
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
      <label className="Flags__label" htmlFor="global">
        g
      </label>

      <input
        className="Flags__checkbox"
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
      <label className="Flags__label" htmlFor="multiline">
        m
      </label>

      <input
        className="Flags__checkbox"
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
      <label className="Flags__label" htmlFor="unicode">
        u
      </label>

      <input
        className="Flags__checkbox"
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
      <label className="Flags__label" htmlFor="sticky">
        y
      </label>
    </fieldset>
  );
};

export default Flags;
