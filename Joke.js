import React from 'react'


function Joke({props}) {
    let status
    if (props.openSpots === 0)
    {
        status = "SOLD OUT"
    }
    else (props.location === "Online")
    {
        status = "ONLINE"
    }
  return (
    <div className='card'>
        {status && <div>{status}</div>}
        <img src={`../images/${props.img}`} />
        <h3>{props.title}</h3>
        <p>From ${props.price}</p>
        <p>{props.description} </p>
        <p>Rating: {props.stats.rating}</p>
        <p> {props.stats.reviewCount}</p>
        <p>{props.location}</p>
        <p>${props.openSpots}</p>

        
      <hr />
    </div>
  )
}

export default Joke
