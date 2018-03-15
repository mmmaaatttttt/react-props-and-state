import React, { Component } from "react";
import BusinessCard from "./BusinessCard";

class MyProfile extends Component {
  render() {
    return (
      <div>
        <BusinessCard
          name="Matt Lane"
          title="Instructor"
          links={[
            "https://github.com/mmmaaatttttt",
            "http://linkedin.com/in/mmmaaatttttt",
            "https://twitter.com/mmmaaatttttt"
          ]}
        />
      </div>
    );
  }
}

export default MyProfile;
