import React from 'react'

const HealthList = ({health}) => {
    // console.log(health)
  return (
    <div> <h5 className="card-title my-3">{health.title}</h5>
    <p className="card-text">
    {health.content}
    </p></div>
  )
}

export default HealthList