import React from 'react';
import logo from "./../../assets/images/logo.png";
import "./navbar.scss";

export default function Navbar() {
  return (
    <div className='navbar'>
      <img src={logo} alt="LOSANGELES MOUNTAINS" />
      <ol className="navbar__nav">
        <li><a href="#history">History</a></li>
        <li><a href="#team">Team</a></li>
      </ol>
    </div>
  )
}
