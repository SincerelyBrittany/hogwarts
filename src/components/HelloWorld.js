import React, { Component } from "react";

class HelloWorld extends Component {
  handleClick(e) {
    console.log("The link was clicked.", e.target);
  }

  render() {
    const pigImageStub = require("../hog-imgs/" +
      this.props.name.toLowerCase().split(" ").join("_") +
      ".jpg");
    return (
      <div className="pigTile">
        <h3>{this.props.name}</h3>
        <img
          src={pigImageStub}
          alt={this.props.name}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default HelloWorld;
