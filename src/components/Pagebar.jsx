import React, { useContext, useState } from "react";
import {BiMenu}  from 'react-icons/bi'
import NewsContext from "../context/news/NewsContext";
import { FetchData } from "../context/news/NewsAction";
const Pagebar = () => {

  const {dispatch} = useContext(NewsContext)
  const handleTopic = async (topic) => {
    const data = await FetchData(topic);
    dispatch({
      type: "GET_DATA",
      payload: data,
    });
  };

  return (
    <nav id="page" className=" navbar navbar-expand-lg bg-dark shadow-lg p-3 mb-5">
      <div className="container-fluid">
        <button
          className="navbar-toggler bg-danger border border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="text-light"><BiMenu/></span>
        </button>
        <div className=" w-100 d-flex justify-content-center">
        <div
          className="collapse navbar-collapse"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav w-100 d-flex justify-content-center">
            <li className="nav-item ">
              <a
                className="nav-link active text-light me-3"
                aria-current="page"
                href="#"
                onClick={()=>handleTopic('Bollywood')}
              >
                ENTERTAINMENT
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-light me-3"   aria-current="page" href="#"
              onClick={()=>handleTopic('Bharat Business')}>
                BUSINESS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light me-3"   aria-current="page" href="#"
              onClick={()=>handleTopic('Bharat Politics')}>
                POLITICS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light me-3"   aria-current="page" href="#"
              onClick={()=>handleTopic('Indian Social Media')}>
              SOCIAL MEDIA
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light me-3"   aria-current="page" href="#"
              onClick={()=>handleTopic('Indian Sports')}>
              SPORTS
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Pagebar;
