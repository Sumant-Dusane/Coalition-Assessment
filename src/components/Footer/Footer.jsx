import React from 'react';
import logo from "./../../assets/images/logo-footer.png";
import "./footer.scss";

export default function Footer() {
  return (
    <div className='footer'>
      <img src={logo} alt="" className="logo" />
      <p>COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
    </div>
  )
}
