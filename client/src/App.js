import React, { Component } from "react";
import Nav from "./components/Nav";
import Body from "./components/Body";
import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="container">
        <Nav />        
        <Body />
      </div>
    );
  }
}

export default App;
