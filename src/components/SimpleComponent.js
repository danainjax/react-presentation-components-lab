// Code SimpleComponent Here
import React, { Component } from "react";

export default class SimpleComponent extends Component {
  constructor() {
    super();
    this.state = { mood: "happy" };
  }

  toggleState = () => {
    const changeMood = this.state.mood === "happy" ? "sad" : "happy";
    this.setState({ mood: changeMood });
  };

  render() {
    return <div onClick={this.toggleState}>{this.state.mood}</div>;
  }
}
