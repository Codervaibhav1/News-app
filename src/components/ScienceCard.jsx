import React, { useContext, useEffect } from "react";
import Science from "./Science";
import ScienceContext from '../context/science/ScienceContext'
import { TeachApi } from "../context/science/ScienceAction";

const ScienceCard = () => {
    const {sciences , sdispatch} = useContext(ScienceContext)
// console.log(sciences)
    const techData = async()=>{
        const data = await TeachApi('in')
        // console.log(data)
        sdispatch({
          type: "SCIENCE",
          payload: data,
        });
      }
      useEffect(()=>{
        techData();
      })
  return (
    <div className="shadow-sm">
        <nav className="navbar bg-info p-1 postion-relative mt-5">
    <div className="container d-flex">
      <h3 className='text-center text-light w-100 postion-sticky top-0'>Science&Technology</h3>
      </div>
      </nav>
      <div className="card container rounded-0 border border-0" style={{ maxHeight: "400px", overflowY: "auto" }}>
        {
            sciences.map((science ,index)=><Science key={index} science={science}/>)
        }
        
      </div>
    </div>
  );
};

export default ScienceCard;
