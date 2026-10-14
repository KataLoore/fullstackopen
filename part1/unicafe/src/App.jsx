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

const Stat = ({text, stat}) => {
  return (
    <div>
      <p>{text}: {stat}</p>
    </div>
  )
}

const Stats = ({good, neutral, bad, total, average, percentage}) => {

  if (total === 0) {
    return (<p>No reviews yet</p>)
  } else {
  return (
    <div>
      <Stat text="good reviews" stat={good}/>
      <Stat text="neutral reviews" stat={neutral}/>
      <Stat text="bad reviews" stat={bad}/>
      <Stat text="total reviews" stat={total}/>
      <Stat text="average rating" stat={average}/>
      <Stat text="positive rating %" stat={percentage}/>
    </div>
  )
}
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