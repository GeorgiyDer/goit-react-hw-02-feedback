import React from 'react';
import SectionTitle from './SectionTitle/SectionTitle';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';


class App extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  makeGoodResult = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  makeNeutralResult = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  makeBadResult = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const feedbackValues = Object.values(this.state).reduce((total, value) => {
      return total + value;
    }, 0);
    return feedbackValues;
  };

  countPositiveFeedbackPercentage = () => {
    const percentPositiveFeadback = this.state.good
      ? Math.ceil((this.state.good * 100) / this.countTotalFeedback())
      : 0;
    return percentPositiveFeadback;
  };

  render() {
    return (
      <SectionTitle title="Please leave feedback">
        <FeedbackOptions good={this.makeGoodResult} neutral={this.makeNeutralResult} bad={this.makeBadResult} />
        {this.countTotalFeedback() ?
          <Statistics
            title="Statistics"
            goodFeedback={this.state.good}
            neutralFeedback={this.state.neutral}
            badFeedback={this.state.bad}
            totalFeedback={this.countTotalFeedback()}
            positiveFeedback={this.countPositiveFeedbackPercentage()}
            /> :
          <Notification title="Statistics" message="No feedback given"/>}
      </SectionTitle>
    );
  }
}

export default App;
