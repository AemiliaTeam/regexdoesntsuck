import React, { Component } from 'react';
import Header from './components/Header';
import FormContainer from './components/FormContainer';
import StringList from './components/StringList';

import './App.css';

// Sample data
import strings from './config';
const initStrings = strings.map(string => {
  return {
    text: string,
    match: false
  };
});
// To load the sample data for testing, change state.strings within the App constructor to initStrings

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pattern: '',
      flags: [],
      strings: initStrings,
      error: false,
      regex: ''
    };

    this.checkMatches = this.checkMatches.bind(this);
    this.onPatternUpdate = this.onPatternUpdate.bind(this);
    this.onFlagUpdate = this.onFlagUpdate.bind(this);
  }

  componentDidMount() {
    this.checkMatches(this.state.pattern, this.state.flags);
  }

  checkMatches(pattern, flags) {
    if (pattern.trim() === '' || !flags) {
      this.setState(() => {
        return {
          error: false,
          regex: ''
        };
      });
    }

    let regex;
    try {
      regex = new RegExp(`${pattern}`, flags.join(''));

      const newStrings = this.state.strings.map(string => {
        if (regex && pattern.trim() !== '' && !this.state.error) {
          if (regex.test(string.text)) {
            return {
              text: string.text,
              match: true
            };
          }
        }
        return {
          text: string.text,
          match: false
        };
      });

      this.setState(() => {
        return {
          strings: newStrings,
          error: false,
          regex: regex
        };
      });
    } catch (err) {
      this.setState(() => {
        return {
          error: true
        };
      });
    }
  }

  onPatternUpdate(pattern) {
    this.setState(() => {
      return {
        pattern
      };
    });
    this.checkMatches(pattern, this.state.flags);
  }

  onFlagUpdate(flag) {
    if (!this.state.flags) {
      const onlyFlag = [flag];
      this.setState(() => {
        return {
          flags: onlyFlag
        };
      });
      this.checkMatches(this.state.pattern, onlyFlag);
    } else {
      let flagState = [...this.state.flags] || [];
      let newFlags;

      if (!flag.checked) {
        newFlags = flagState.filter(current => current !== flag.value);
      } else {
        flagState.push(flag.value);
        newFlags = [...flagState];
      }

      this.setState(() => {
        return {
          flags: newFlags
        };
      });
      this.checkMatches(this.state.pattern, newFlags);
    }
  }

  render() {
    return (
      <div>
        <Header title="Regex Lab" />
        <FormContainer
          onPatternUpdate={this.onPatternUpdate}
          onFlagUpdate={this.onFlagUpdate}
        />
        {/* Next line is a test display, need to put this into its own component */}
        <h2>
          {!this.state.error
            ? `${this.state.regex}`
            : 'Invalid Regular Expression'}
        </h2>
        <StringList items={this.state.strings} pattern={this.state.pattern} />
      </div>
    );
  }
}

export default App;
