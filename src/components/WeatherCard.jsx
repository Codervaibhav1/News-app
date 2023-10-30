import React from 'react'
import Back from '../assets/humdity.png'
import {GoSearch} from 'react-icons/go'
const WeatherCard = ({weathers}) => {
  // console.log(weathers)
  return (
    <>
    <div className="card col-lg-12 shadow-sm p-3 my-5" id='weather'>
      <form className='d-flex justify-content-center'>
        <input type="text"  className='w-25' id='weather-input' placeholder='Loction'/>
        <button type="button" className="btn btn-outline-light" ><GoSearch/></button>
      </form>
    <div className="card-body">
      <h6 className="card-title text-light text-center display-4">{weathers.location.name}</h6>
      <div className='d-flex justify-content-between w-100'>
        <div className='d-flex'><img src={weathers.current.condition.icon} alt="" /> 
        <h6 className="card-subtitle text-light display-6 ">
        {weathers.current.temp_c}°C</h6></div>
        <div className='ms-3'>
          <img id='humdity' className='mt-3' src={Back} alt="" />  
        <p className='text-light float-end mt-2'>Humidity {weathers.current.humidity+ '%' + ' >'}</p>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default WeatherCard