import React, { useContext, useState } from "react";
import Logo from "../assets/Logo.png";
import { FaSearch } from "react-icons/fa";
import NewsContext from "../context/news/NewsContext";
import { FetchData } from "../context/news/NewsAction";

const Navbar = () => {
  const { dispatch } = useContext(NewsContext);
  const [text, setText] = useState("");
  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await FetchData(text);
    // console.log(data)
    dispatch({
      type: "GET_DATA",
      payload: data,
    });
    setText("");
  };

  return (
    <>
      <nav id="nav" className="navbar bg-body-tertiary p-1 shadow-lg">
        <div className="container d-flex">
          <a className="navbar-brand" href="#">
            <img id="logo" src={Logo} />
          </a>
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control rounded-0 border border-danger border-end-0"
              type="search"
              placeholder="Search"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className=" btn btn-outline-danger rounded-end-pill"
              type="submit"
            >
              <FaSearch />
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
