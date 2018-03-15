import React, { Component } from "react";
import heads from "./heads.jpg";
import tails from "./tails.jpg";

class Coin extends Component {
  render() {
    const coinObj = { heads, tails };
    const key = this.props.side < 0.5 ? "heads" : "tails";
    return (
      <div>
        <img src={coinObj[key]} />
        <p>The coin came up {key}!</p>
      </div>
    );
  }
}

export default Coin;
