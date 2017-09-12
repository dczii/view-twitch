import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Home from './components/Home';
import superagent from 'superagent';
import jsonp from 'superagent-jsonp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: false,
      searchValue: '',
      results: []
    };
  }  
  render() {
    return (
      <MuiThemeProvider>
        <Home />
      </MuiThemeProvider>
    );
  }
}

export default App;
