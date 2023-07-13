import { useState } from 'react'

const Button = (props) => {
  return (
    <button>{props.text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(8).fill(0))

  const setAnecdote = () => {
    const randomInt = Math.floor(Math.random() * 8);
    setSelected(randomInt)
  }

  const handleVote = () => {
    const votecopy = [...votes]
    votecopy[selected] += 1
    setVotes(votecopy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has votes {votes[selected]}</div>
      <button onClick={handleVote}>Vote</button>
      <button onClick={setAnecdote}>Next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[votes.indexOf(Math.max(...votes))]}</div>
    </div>
  )
}

export default App