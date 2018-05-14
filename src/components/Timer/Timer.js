import React, { Component } from "react";

export default class Timer extends Component {
  componentDidMount() {
    setTimeout(this.props.onFired, 2000);
  }

  render() {
    return null;
  }
}
