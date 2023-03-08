import React, { useState } from 'react';
import { AppBox, StatisticTitle } from './App.styled';
import { FeedbackOptions } from './Feadback/FeadbackOptions';
import { GlobalStyle } from './Global.styled';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistic/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    const currentBtnValue = e.currentTarget.value;

    switch (currentBtnValue) {
      case 'good':
        setGood(value => value + 1);
        break;
      case 'neutral':
        setNeutral(value => value + 1);
        break;
      case 'bad':
        setBad(value => value + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const valuesArr = [good, neutral, bad];
    return valuesArr.reduce((acc, val) => {
      acc += val;
      return acc;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.trunc((good / countTotalFeedback()) * 100);
  };

  return (
    <AppBox>
      <GlobalStyle />
      <Section title="Please leave feadback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback}></FeedbackOptions>
        <StatisticTitle>Statistic</StatisticTitle>
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </AppBox>
  );
};
