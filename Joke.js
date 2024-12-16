import React from 'react'

function Joke({setup, punchline}) {
  return (
    <div>
    {setup && <h2>Setup: {setup}</h2>}
      <p>Punchline: {punchline}</p>
      <hr />
    </div>
  )
}

export default Joke
