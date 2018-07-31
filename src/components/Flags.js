import React from 'react';

const Flags = props => {
  return (
    <div className="Flags">
      <p className="Flags__legend">Flags:</p>

      <div className="Flags__container">
        <div className="Flags__item">
          <input
            className="Flags__input"
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
            <span className="Flags__checkbox" />
            i
          </label>
        </div>

        <div className="Flags__item">
          <input
            className="Flags__input"
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
            <span className="Flags__checkbox" />
            g
          </label>
        </div>

        <div className="Flags__item">
          <input
            className="Flags__input"
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
            <span className="Flags__checkbox" />
            m
          </label>
        </div>

        <div className="Flags__item">
          <input
            className="Flags__input"
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
            <span className="Flags__checkbox" />
            u
          </label>
        </div>

        <div className="Flags__item">
          <input
            className="Flags__input"
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
            <span className="Flags__checkbox" />
            y
          </label>
        </div>
      </div>
    </div>
  );
};

export default Flags;
