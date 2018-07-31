import React, { Component } from 'react';
import Header from './components/Header';
import FormContainer from './components/FormContainer';
import StringList from './components/StringList';
import AddString from './components/AddString';
import DisplayRegex from './components/DisplayRegex';
import ClearStrings from './components/ClearStrings';
import Footer from './components/Footer';
import ErrorMessage from './components/ErrorMessage';

import './styles/main.css';

// To load the sample data for testing, change state.strings to this value
import strings from './config';

class App extends Component {
  state = {
    pattern: '',
    flags: [],
    strings: strings,
    error: 'Test error',
    regex: '',
    allMatch: false
  };

  componentDidMount = () => {
    //this.checkMatches(this.state.pattern, this.state.flags);
  };

  checkOneMatch = (string, regex) => {
    if (regex) {
      return regex.test(string);
    } else {
      this.setState(() => {
        return {
          error: 'Invalid regular expression'
        };
      });
    }
  };

  checkMatches = (pattern, flags) => {
    if (pattern.trim() === '' || !flags) {
      this.setState(() => {
        return {
          error: null,
          regex: ''
        };
      });
    }

    let regex;
    try {
      regex = new RegExp(`${pattern}`, flags.join(''));
      let allMatches = [];

      const newStrings = this.state.strings.map(string => {
        if (regex && pattern.trim() !== '' && !this.state.error) {
          if (regex.test(string.text)) {
            allMatches.push(true);
            return {
              text: string.text,
              match: true
            };
          }
        }
        allMatches.push(false);
        return {
          text: string.text,
          match: false
        };
      });

      this.setState(() => {
        return {
          strings: newStrings,
          error: null,
          regex: regex,
          allMatch: !allMatches.includes(false)
        };
      });
    } catch (err) {
      this.setState(() => {
        return {
          error: 'Invalid regular expression'
        };
      });
    }
  };

  onClearStrings = event => {
    this.setState({
      strings: []
    });
  };

  onPatternUpdate = pattern => {
    this.setState(() => {
      return {
        pattern
      };
    });
    this.checkMatches(pattern, this.state.flags);
  };

  onFlagUpdate = flag => {
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
  };

  onAddString = event => {
    event.preventDefault();

    const text = event.target.elements.string.value;
    const existingStrings = this.state.strings.map(string => string.text);

    if (existingStrings.includes(text)) {
      this.setState({
        error: 'All test cases must be unique'
      });
    } else if (text === '') {
      this.setState({
        error: 'Each test case must contain at least one character'
      });
    } else {
      const newString = {
        text,
        match: this.checkOneMatch(text, this.state.regex)
      };

      const newStrings = this.state.strings.concat([newString]);

      this.setState(
        () => {
          return {
            strings: newStrings,
            error: null
          };
        },
        () => this.checkMatches(this.state.pattern, this.state.flags)
      );
    }

    event.target.elements.string.value = '';
  };

  onRemoveString = (event, stringToRemove) => {
    this.setState(
      prevState => {
        return {
          strings: prevState.strings.filter(string => {
            return stringToRemove.toString() !== string.text;
          })
        };
      },
      () => this.checkMatches(this.state.pattern, this.state.flags)
    );
  };

  render = () => {
    const title = `Regex Doesn't Suck`;

    return (
      <div className="container">
        <Header title={title} />

        <div className="controls-container">
          <FormContainer
            onPatternUpdate={this.onPatternUpdate}
            onFlagUpdate={this.onFlagUpdate}
          />
          <DisplayRegex
            error={this.state.error === 'Invalid regular expression'}
            regex={this.state.regex}
            allMatch={this.state.allMatch}
          />
        </div>

        <div className="strings-container">
          <ClearStrings onClearStrings={this.onClearStrings} />
          <StringList
            items={this.state.strings}
            pattern={this.state.pattern}
            onRemoveString={this.onRemoveString}
          />
          {/* TODO - create a better error handling scheme */}
          {this.state.error &&
            this.state.error !== 'Invalid regular expression' && (
              <ErrorMessage errorMessage={this.state.error} />
            )}
          <AddString onAddString={this.onAddString} regex={this.state.regex} />
        </div>
        <Footer date={new Date().getFullYear()} />
      </div>
    );
  };
}

export default App;
