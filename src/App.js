import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/Modal";

var classNames = require("classnames");

class App extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
    this.onModalClick = this.onModalClick.bind(this);
    this.onExitClick = this.onExitClick.bind(this);
  }

  onModalClick() {
    this.setState({ active: true });
  }

  onExitClick() {
    this.setState({ active: false });
  }

  render() {
    const { active } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <button onClick={this.onModalClick}>Open modal</button>
          </p>
          <a
            className="App-link"
            href="https://coders-x.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yêu anh Thịnh
          </a>
        </header>
        <Modal active={active} onExitClick={this.onExitClick} />
      </div>
    );
  }
}

export default App;
