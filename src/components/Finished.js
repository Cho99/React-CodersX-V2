import React, { Component } from "react";
var classNames = require("classnames");

export default class Finished extends Component {
  render() {
    const item = this.props.item;
    let number = Number(this.props.number) + 1;
    return (
      <div className="Finished">
        <div className="items-finished">
          <b className="index">{number}.</b>
          <div className="item-name">{item.title}</div>
        </div>
      </div>
    );
  }
}
