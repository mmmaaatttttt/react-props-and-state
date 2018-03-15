import React, { Component } from "react";
import CoinGame from "./CoinGame";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Intro to React!</h1>
        </header>
        <CoinGame />
      </div>
    );
  }
}

export default App;
