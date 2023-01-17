import React, { Component } from "react";

import FeedbackOptions from "./CaffeApp/FeedbackOptions";
import Statistics from "./CaffeApp/Statistics";

class App  extends Component {
  state = {
    good: 3,
    neutral: 4,
    bad: 2       
  }

  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    return (
      <div>
        <h2>Pleace leave feedback</h2>

        <div>
          <FeedbackOptions options={"#"} onLeaveFeedback={"#"} />

          {/* <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button> */}
        </div>

        <div>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
            />
        </div>
      </div>
    );
  }
};
export default App ;
