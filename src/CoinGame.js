import React, { Component } from "react";
import Coin from "./Coin";

class CoinGame extends Component {
  state = {
    flipValue: Math.random()
  };

  flip = () => {
    this.setState({ flipValue: Math.random() });
  };

  render() {
    return (
      <div>
        <Coin side={this.state.flipValue} />
        <button onClick={this.flip}>Flip!</button>
      </div>
    );
  }
}

export default CoinGame;
