import React, { Component } from "react";

class BusinessCard extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.title}</h2>
        {this.props.links.map(link => <li>{link}</li>)}
      </div>
    );
  }
}

export default BusinessCard;
