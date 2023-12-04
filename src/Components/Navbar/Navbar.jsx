/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Searchbar from "../SearchBar/Searchbar";
import { FaUserAstronaut } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { IoNotifications } from "react-icons/io5";
import "./navbar.css";

function Navbar({ handleMenu, handleNotifications }) {
  const [results, setResults] = useState([]);
  return (
    <>
      <div className="nav-sankofa">
        <img
          src="/assets/images/logo2.png"
          alt="Logo"
          className="logo-home"
        />
        <div className="search-bar-container">
          <Searchbar setResults={setResults} />
          {/* <SearchResults results={results} /> */}
        </div>
        <div className="icons-home">
          <IoNotifications
            onClick={() => handleNotifications(true)}
            style={{ cursor: "pointer" }}
          />
          <FaUserAstronaut className="navbar-icon-perfil" />
          <LuMenu
            onClick={() => handleMenu(true)}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
