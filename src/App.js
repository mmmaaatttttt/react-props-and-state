import React, { Component } from "react";
import MyProfile from "./MyProfile";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Intro to React!</h1>
        </header>
        <MyProfile />
      </div>
    );
  }
}

export default App;
