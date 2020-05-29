import React, { Component } from "react";
var classNames = require("classnames");

export default class Upcoming extends Component {
  render() {
    const item = this.props.item;
    const onFinished = this.props.onFinished;
    let number = Number(this.props.number) + 1;
    return (
      <div className="Upcoming" onClick={onFinished}>
        <div className="items-up">
          <b className="index">{number}.</b>
          <div className="item-name">{item.title}</div>
        </div>
      </div>
    );
  }
}
