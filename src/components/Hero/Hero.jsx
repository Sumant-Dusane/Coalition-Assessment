import React from 'react';
import logoWithText from "../../assets/images/logo-with-text.png";
import "./hero.scss";

export default function Hero() {
  return (
    <div className='hero'>
      <div className="hero__img"></div>
      <div className="hero__strip">
        <img src={logoWithText} alt="LOSANGELES MOUNTAIN" className="logo" />
        <ol className="hero__strip__nav">
          <li><a href="#history">History</a></li>
          <li><a href="#team">Team</a></li>
        </ol>
      </div>
    </div>
  )
}
