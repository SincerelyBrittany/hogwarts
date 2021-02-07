import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "../container/HogsContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld hogs={hogs}/>
      </div>
    );
  }
}

export default App;
