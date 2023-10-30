import React, { useContext, useEffect } from 'react'
import HealthContext from '../context/Health/HealthContext'
import { healthApi } from '../context/Health/HealthAction'
import HealthList from './HealthList'

const HealthCard = () => {
  const {Healths , hdispatch} = useContext(HealthContext)

  const healthData = async ()=>{
    const data = await healthApi('in')
    // console.log(data)
    hdispatch({
      type: "HEALTH",
      payload: data,
    });
  }
   useEffect(()=>{
    healthData();
   },[])
  return (
    <div className='shadow-sm '>
     <nav className="navbar bg-info p-1 postion-relative">
    <div className="container d-flex">
      <h3 className='text-center text-light w-100 postion-sticky top-0'>Health</h3>
      </div>
      </nav>
    <div className="container" style={{ maxHeight: "400px", overflowY: "auto" }}>
    <div className="card rounded-0 border border-0">
      <div className="card-body">
        {
          Healths.map((health ,index)=> <HealthList key={index} health={health}/>)
        }
      </div>
    </div>
  </div>
  </div>
  )
}

export default HealthCard