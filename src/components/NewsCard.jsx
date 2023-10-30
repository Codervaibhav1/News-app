// import React, { useContext, useEffect } from 'react'
import DefaultImage from "../assets/not.png";
const NewsCard = ({ news }) => {
  // console.log(news);
  return (
    <>
      <div className="card-group my-3">
        <div className="card">
          <img id="news-img"
            src={news.urlToImage ? news.urlToImage : DefaultImage}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{news.title}</h5>
            <p className="card-text">{news.description}</p>
            <p className="card-text">
              <small className="text-body-secondary">-{news.author}</small>{" "}
              <small className="text-body-secondary float-end">-{news.publishedAt}</small>
            </p>
          </div>
          <div className="d-flex justify-content-center row">
          <a className="btn btn-outline-dark rounded-0 my-3 col-lg-4 w-50" href={news.url}>Explore More</a>
          </div>
        </div>
        {/* <div className="card">
        <img src={news.urlToImage}  className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{news.title}</h5>
          <p className="card-text">{news.description}</p>
          <p className="card-text"><small className="text-body-secondary">-{news.author}</small></p>
        </div>
      </div> */}
        {/* <div className="card">
        <img src={news.urlToImage} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{news.title}</h5>
          <p className="card-text">{news.description}</p>
          <p className="card-text"><small className="text-body-secondary">{news.author}</small></p>
        </div>
      </div> */}
      </div>
    </>
  );
};

export default NewsCard;
