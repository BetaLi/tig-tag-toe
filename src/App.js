import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from "./container/Game";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br/>
          <div className="App-body">
             <Game/>
          </div>
      </div>
    );
  }
}

export default App;
