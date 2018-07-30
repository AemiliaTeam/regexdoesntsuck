import React from 'react';

const Header = props => {
  return (
    <header className="Header">
      <h1 className="Header__text">{props.title}</h1>
    </header>
  );
};

export default Header;
