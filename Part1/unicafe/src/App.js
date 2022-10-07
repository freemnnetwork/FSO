import { useState } from 'react'

const StatisticLine = (props) => {
  return(
    <>
        <h1>{props.headline}</h1>
        <p>{props.stat} {props.text}</p>
    </>
  )
}

const Statistics = (props) => {
  if (props.all >= 1){
    return(
      <>
        <StatisticLine headline="Statistics"></StatisticLine>
        <StatisticLine stat={props.good} text="good"></StatisticLine>
        <StatisticLine stat={props.neutral} text="neutral"></StatisticLine>
        <StatisticLine stat={props.bad} text="bad"></StatisticLine>
        <StatisticLine stat={props.all} text="all"></StatisticLine>
        <StatisticLine stat={(props.good - props.bad) / props.all} text="average"></StatisticLine>
        <StatisticLine stat={(props.good / props.all) * 100} text="positive"></StatisticLine>
      </>
    )
  }
  return(
    <>
      <p>No feedback given</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + bad + neutral


  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics good={good} bad={bad} neutral={neutral} all={all}></Statistics>
    </div>
  )
}

export default App