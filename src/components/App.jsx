import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

const App = ({ initialValue = 0 }) => {
  const options = ['good', 'neutral', 'bad'];
  const [state, setState] = useState({
    good: initialValue,
    neutral: initialValue,
    bad: initialValue,
  });

  const onLeaveFeedback = option => {
    setState(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
  };

  const countTotalFeedback = () => {
    const { good, bad, neutral } = state;
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const positiveFeedbackPercentage = Math.round(
      (good / countTotalFeedback()) * 100
    );
    return positiveFeedbackPercentage;
  };

  return (
    <div className="mainContainer">
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={state.good}
          bad={state.bad}
          neutral={state.neutral}
          total={countTotalFeedback()}
          positiveFeedback={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};

export default App;