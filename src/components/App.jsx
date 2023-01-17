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

    switch (e.target.id) {
      case "Good":
        return this.setState(prevState => ({
              good: prevState.good + 1,
        }));
      case "Neutral":
        return this.setState(prevState => ({
              neutral: prevState.neutral + 1,
        }));
      case "Bad":
        return this.setState(prevState => ({
              bad: prevState.bad + 1,
        }));
    
      default:
        break;
    }
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
