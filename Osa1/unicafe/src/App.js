import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="all" value={props.all}/>
      <StatisticLine text="average" value={props.avg}/>
      <StatisticLine text="positive" value={props.pos} symbol="%"/>
    </table>
  )
}

const StatisticLine = (props) => (
  <tbody>
    <tr>
      <td>{props.text}</td>
      <td>{props.value} {props.symbol}</td>
    </tr>
  </tbody>
)


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAvg] = useState(0)
  const [positive, setPos] = useState(0)

  const setToGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood) 
    const updatedAll = updatedGood + bad + neutral
    setAll(updatedAll)
    setAvg((updatedGood - bad) / updatedAll)
    const updatedPositive = (updatedGood / updatedAll)*100
    setPos(updatedPositive)
  }
  const setToNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral) 
    const updatedAll = updatedNeutral + bad + good
    setAll(updatedAll)
    setAvg((good - bad) / updatedAll)
    const updatedPositive = (good / updatedAll)*100
    setPos(updatedPositive)
  }
  const setToBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    const updatedAll = updatedBad + neutral + good
    setAll(updatedAll)
    setAvg((good - updatedBad) / updatedAll)
    const updatedPositive = (good / updatedAll)*100
    setPos(updatedPositive)
  }
  

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={setToGood} text="good"/>
      <Button handleClick={setToNeutral} text="neutral"/>
      <Button handleClick={setToBad} text="bad"/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} avg={average} pos={positive}/>
    </div>
  )
}

export default App