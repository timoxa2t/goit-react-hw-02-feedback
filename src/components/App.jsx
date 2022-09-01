import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";
import React, {Component} from "react";

const feedbackOptions = {
  GOOD: "good",
  NEUTERAL: "neutral",
  BAD: "bad"
}

const countTotalFeedback = (good, neutral, bad) => {
  return good + neutral + bad
}

const countPositiveFeedbackPercentage = (good, neutral, bad) => {
  if(good === 0) return 0
  return parseInt(good / countTotalFeedback(good, neutral, bad) * 100) 
}


export class App extends Component {

  constructor(){
    super()
    this.handleFeedback = this.handleFeedback.bind(this)
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  handleFeedback = evt => {
      const key = evt.target.innerText
      this.setState({
        [key]: this.state[key] + 1
      }) 
  }

  total = () => countTotalFeedback(this.state.good, this.state.neutral, this.state.bad)
  percent = () => countPositiveFeedbackPercentage(this.state.good, this.state.neutral, this.state.bad)
  render() {
    return(
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions 
          options={feedbackOptions} 
          onLeaveFeedback={this.handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {this.total() && this.total() > 0 ? 
          <Statistics 
            good={this.state.good} 
            neutral={this.state.neutral} 
            bad={this.state.bad} 
            total={this.total()} 
            positivePercentage={this.percent()}>

          </Statistics>
          : <Notification message="There is no feedback"/>
        }
      </Section>
    </div>
    )
  }
};



