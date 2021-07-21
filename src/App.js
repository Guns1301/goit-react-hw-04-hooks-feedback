import { useState } from "react"; //для того что б хранить состояние(state) в функциях , надо
import Section from "./Section/Section.js";
import Statistics from "./Statistics/Statistics.js";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions.js";
import Notification from "./Notification/Notification.js";

import "./App.css";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countFeedbacks = (e) => {
    const name = e.currentTarget.name;
    switch (name) {
      case "good":
        setGood((prevgood) => good + 1);

        break;
      case "neutral":
        setNeutral((prevneutral) => neutral + 1);

        break;
      case "bad":
        setBad((prevbad) => bad + 1);

        break;

      default:
        alert("Don`t work - try again");
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  return (
    <>
      <Section title="Please leave Feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={countFeedbacks}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            feedbackPercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification msg="No Feedbacks - Sorry" />
        )}
      </Section>
    </>
  );
}
