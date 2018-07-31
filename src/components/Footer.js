import React from 'react';

const Footer = props => {
  return (
    <footer className="Footer">
      <p className="Footer__text">
        &copy; {props.date} Phil Zona |{' '}
        <a
          className="Footer__link"
          href="https://github.com/pbzona/regexdoesntsuck"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Github
        </a>
      </p>
    </footer>
  );
};

export default Footer;
