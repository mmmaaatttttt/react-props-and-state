import React, { Component } from "react";

class MoodChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMoodIdx: 0
    };
    this.changeMood = this.changeMood.bind(this);
  }

  changeMood(e) {
    let nextMoodIdx = this.state.currentMoodIdx + 1;
    if (nextMoodIdx === this.props.moods.length) {
      nextMoodIdx = 0;
    }
    this.setState({
      currentMoodIdx: nextMoodIdx
    });
  }

  render() {
    const face = this.props.moods[this.state.currentMoodIdx];
    return (
      <div>
        <h1>{face}</h1>
        <button onClick={this.changeMood}> Change Mood </button>
      </div>
    );
  }
}

MoodChanger.defaultProps = {
  moods: [":)", ":(", ">:(", "-_-"] // will come in as props
};

export default MoodChanger;
