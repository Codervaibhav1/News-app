import React from 'react'
import DefaultImage from '../assets/not.png'
const Science = ({science}) => {
  // console.log(science)
  return (
    <div>
      <img src={science.urlToImage ?science.urlToImage : DefaultImage} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{science.title}</h5>
      <p className="card-text">{science.description}</p>
      <a href={science.url} className="btn btn-outline-info">Explore More</a>
    </div></div>
  )
}

export default Science