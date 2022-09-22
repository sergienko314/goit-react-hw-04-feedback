
import Section from "./Section";
import Notification from './Notification'
import './App.css';
import Statistics from 'Statistics';
import FeedbackOptions from 'FeedbackOptions';
import { useState } from 'react';

const App = () => {
 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const options = ["good", "neutral", "bad" ]
  const onLeaveFeedback = (option) => {
    if (option === "good") setGood(prev => prev += 1);
    if (option === "neutral") setNeutral(prev => prev += 1);
    if (option === "bad") setBad(prev => prev += 1);
       
  };  
  
  const countTotalFeedback = () => {
     return good + neutral + bad
  }
  
  const countPositivePercentage = () => {
    const total = countTotalFeedback();
    const persantage = Math.round((100 / total) * good);
    return persantage;
  }
  
    return (
      <div className="App">
        <Section title="Pleace leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        </Section>
        <Section title={"Statistics"}>
          {countTotalFeedback() !== 0 ? <Statistics good={good} neutral={neutral} bad={bad} TotalFeedback={countTotalFeedback} PositivePercentage={countPositivePercentage} />
            : <Notification message="There is no feedback" />}
        
        </Section>
      </div>
    );
  }

export default App
// class App extends Component {
//   state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
//   }



//   countPositivePercentage = () => {
//     const total = this.countTotalFeedback();
//     const persantage = Math.round((100 / total) * this.state.good);
//     return persantage;
//   }
