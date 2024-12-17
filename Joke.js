import React from 'react'


function Joke({props}) {
    let status
    if (props.joke.openSpots === 0)
    {
        status = "SOLD OUT"
    }
    else (props.joke.location === "Online")
    {
        status = "ONLINE"
    }
  return (
    <div className='card'>
        {status && <div>{status}</div>}
        <img src={`../images/${props.joke.coverImg}`} />
        <h3>{props.joke.title}</h3>
        <p>From ${props.joke.price}</p>
        <p>{props.joke.description} </p>
        <p>Rating: {props.joke.stats.rating}</p>
        <p> {props.joke.stats.reviewCount}</p>
        <p>{props.joke.location}</p>
        <p>${props.joke.openSpots}</p>

        
      <hr />
    </div>
  )
}

export default Joke
