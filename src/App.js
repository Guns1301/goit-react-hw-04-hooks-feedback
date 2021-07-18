import React, { Component } from "react";
import Section from "./Section/Section.js";
import Statistics from "./Statistics/Statistics.js";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions.js";
import Notification from "./Notification/Notification.js";

import "./App.css";

//чтобы превратить функцию в класс нужно из React унаследовать Component
class App extends Component {
  //static defaultProps = {}; и static PropTypes = {};
  // в Классах defaultPropsоп и PropTypes описывается внутри класса ,
  // после идет state = {}; затем кастомные методы () и последним метод render(){return};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = (event) => {
    const { name } = event.currentTarget;

    this.setState((prevState) => ({
      [name]: prevState[name] + 1, // в prevState реакт передаст во время обновления актуальное состояние объекта state. эта функция должна вернуть обновленный state
    }));
  };

  // что бы привязать контекст нужно создать публичный метод класса.
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };
  // Необходимо объявить обязательный метод render(), который вызывается по умолчанию и возвращает JSX-разметку.
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      //тут и будем рендерить разметку
      <div className="wrapper">
        <Section title="Please leave your feedback about Espresso Cafe">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.countFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
