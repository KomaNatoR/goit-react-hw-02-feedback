import React, { Component } from "react";

import FeedbackOptions from "./CaffeApp/FeedbackOptions";
import Statistics from "./CaffeApp/Statistics";

class App  extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0       
  }

  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => Math.round((this.state.good / this.countTotalFeedback()) * 100);

  onButtonClick = (e) => {
    console.dir(e.target.id);
    console.log(this.state);

    const stateKey = e.target.id;
    this.setState(prevState => ({
      [stateKey]: prevState[stateKey] + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Pleace leave feedback</h2>

        <div>
          <FeedbackOptions options={"#"} onLeaveFeedback={this.onButtonClick} />
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
export default App;
