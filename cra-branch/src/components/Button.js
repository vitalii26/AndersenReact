import React, { Component, PureComponent } from "react";

class Button extends PureComponent {
  render() {
    console.log("Button render");

    return <button>{this.props.text}</button>;
  }
}

export default Button;
