import React, { Component } from "react";
var classNames = require("classnames");

export default class Modal extends Component {
  render() {
    const active = this.props.active;
    const onExitModal = this.props.exit;
    const addItems = this.props.addItems;
    return (
      <div className={classNames('Modal', {showModal: active})}>
        <div className="header">
          <h3>ADD TodoList</h3>
          <div className="exit" onClick={onExitModal}>
            ❌
          </div>
        </div>
        <div className="from">
          <label htmlFor="todo">Title:</label>
          <input id="todo" className="todo" placeholder="Type here..."></input>
        </div>
        <button onClick={addItems}>ADD</button>
      </div>
    );
  }
}
