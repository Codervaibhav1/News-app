import React, { useContext, useEffect } from "react";
import NewsContext from "../context/news/NewsContext";
import { FetchData } from "../context/news/NewsAction";
import NewsCard from "./NewsCard";
import WeatherCard from "./WeatherCard";
import WeatherContext from "../context/Weather/WeatherContext";
import { WeatherData } from "../context/Weather/WeatherAction";
import HealthCard from "./HealthCard";
import ScienceCard from "./ScienceCard";


const CradData = () => {
  const { newsAll, dispatch} = useContext(NewsContext);
  const {weathers ,wdispatch} = useContext(WeatherContext)
  // console.log(newsAll);
  // console.log(weathers)
  const getData = async () => {
    const data = await FetchData('indore');
    //   console.log(data)
    dispatch({
      type: "GET_DATA",
      payload: data,
    });
  };
  const apiData = async () => {
    const data = await WeatherData("indore");
      // console.log(data)
    wdispatch({
      type: "WEATHER",
      payload: data,
    });
  };

  useEffect(() => {
    getData();
    apiData();
  }, []);

// {newsAll.length===0 ?<h1 className="text-center">Loading...</h1> : ''}
if (!newsAll || newsAll.length === 0) {
  
  return <h1 className="text-center">Loading...</h1>;
}

  return (
    <div>
      <div className=" row" id="newspart">
        <div className="col-lg-8 col-md-7">
          {
            newsAll.map((news ,index)=><NewsCard key={index} news={news}/>)
          }
        </div>
        <div className='col-lg-4 col-md-5'id='card-part'>
          <WeatherCard weathers={weathers}/>
            <HealthCard/>
            <ScienceCard/>
          </div>
      </div>
    </div>
  );
};

export default CradData;
