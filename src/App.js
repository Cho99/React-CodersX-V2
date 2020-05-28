import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/TodoApp.css'
import './components/Modal.css'
import TodoApp from './components/TodoApp';
import Modal from './components/Modal';

var classNames = require("classnames");

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp /> 
      </div>
    );
  }
}

export default App;
