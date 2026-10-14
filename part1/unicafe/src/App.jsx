import { useState } from 'react'

const Title = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Stats = ({good, neutral, bad, total, average, percentage}) => {

  return (
    <div>
      <p>good reviews: {good}</p>
      <p>neutral reviews: {neutral}</p>
      <p>bad reviews: {bad}</p>
      <p>total reviews: {total}</p>
      <p>average rating: {average}</p>
      <p>positive ratings: {percentage} %</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, updateTotal] = useState(0)

  const incrementGood = () => {
    setGood(good + 1)
    updateTotal(total + 1)
  }
  const incrementNeutral = () => {
    setNeutral(neutral + 1)
    updateTotal(total + 1)
  }
  const incrementBad = () => {
    setBad(bad + 1)
    updateTotal(total + 1)
  }
  const average = ((good - bad) / total).toFixed(2)
  const percentage = ((good / total) * 100).toFixed(0)

  return (
    <div>
      <Title text="give feedback"/>
      <Button onClick={incrementGood} text="good"/>
      <Button onClick={incrementNeutral} text="neutral"/>
      <Button onClick={incrementBad} text="bad"/>
      <Title text="feedback stats"/>
      <Stats 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={total} 
        average={average}
        percentage={percentage}
      />
      
    </div>
  )
}

export default App