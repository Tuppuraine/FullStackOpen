import React, { useState } from 'react'

const Button = (props) => {
  const { handleClick, text } = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticsLine = (props) => {
  return (
    <thead>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </thead>
  )
}

const Statistics = (props) => {
  if (props.allClicks === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
        <StatisticsLine text="Good" value={props.good} />
        <StatisticsLine text="Neutral" value={props.neutral} />
        <StatisticsLine text="Bad" value={props.bad} />
        <StatisticsLine text="All" value={props.allClicks} />
        <StatisticsLine text="Average" value={props.sum / props.allClicks} />
        <StatisticsLine text="Positive" value={(props.good / props.allClicks) * 100} />
      </table>
    </div>
  )
}  

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  const [sum, setSum] = useState(0)

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(allClicks + 1)
    setSum(sum - 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(allClicks + 1)
  }
  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(allClicks + 1)
    setSum(sum + 1)
  }



  return (
    <div>
      <h1>Please give feedback!</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>Statistics: </h1>
      <Statistics good={good} neutral={neutral} bad={bad} sum={sum} allClicks={allClicks} />
    </div>
  )
}

export default App