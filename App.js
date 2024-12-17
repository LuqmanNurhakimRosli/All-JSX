import React from 'react'
import Joke from 'Joke'
import jokeData from './jokeData'

function App() {
    const arrayJoke = jokeData.map( joke => {
        return <Joke 
        key = {joke.id}
        setup={joke.setup}  
        punchline={joke.punchline}
        joke={joke}
        />
    }
    )
  return (
    <div>
        {arrayJoke}
    </div>
  )
}

export default App
