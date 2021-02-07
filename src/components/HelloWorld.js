import React, { Component } from "react";

class HelloWorld extends Component {
  render() {
    const pigImageStub = require("../hog-imgs/" +
      this.props.name.toLowerCase().split(" ").join("_") +
      ".jpg");
    return (
      <div className="pigTile">
        <h3>{this.props.name}</h3>
        <img src={pigImageStub} alt={this.props.name} />
      </div>
    );
  }
}

export default HelloWorld;
