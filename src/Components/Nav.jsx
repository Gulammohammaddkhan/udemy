import React from "react";
import logo from "./../assets/images/logo.svg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { IoSearchSharp } from "react-icons/io5";
import { HomePageData } from "../data/Data";
import { Link } from "react-router-dom";

function Nav() {
  const { header } = HomePageData;
  console.log("header", header);

  return (
    <div>
      <div className="nav">
        <img src={logo} className="logo" />
        {
          <span className="hover:underline hover:text-purple-600">
            {header.links[0].name}
          </span>
        }
        <div className="anything">
          <IoSearchSharp className="glass" />
          <input
            type="text"
            placeholder=" Search for anything"
            className="Search-input"
          />{" "}
        </div>
        {header.links.slice(1).map((link, index) => (
          <span
            className="hover:underline hover:text-purple-600"
            key={index}
            to={link.url}
          >
            {link.name}
          </span>
        ))}
        {header.userOptions.map((option, index) => (
          <button key={index} className="signup">
            {option.name}
          </button>
        ))}

        <div className="signup">{header.languageSelector.icon}</div>
      </div>
    </div>
  );
}

export default Nav;
