import React, { Component } from "react";
import Nav from "./components/Nav";
import Body from "./components/Body";
import Card from "./components/Card";
import beetles from "./beetles.json";
import "./App.css";

class App extends Component {

  state = {
    beetles: beetles
  };

  render() {
    return (
      <div className="container">
        <Nav />
        <Body>
          {this.state.beetles.map(beetle => (
            <Card
              id={beetle.id}
              key={beetle.id}
              url={beetle.url}
            />
          ))}
        </Body>
      </div>
    );
  }
}

export default App;
