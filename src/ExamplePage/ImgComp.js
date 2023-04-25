import React from 'react';
import logo from '../images/exmple-img-01.png';
import './ImgCompStyle.css';

export default function ImgComp() {
  return (
    <div>
        <img src={logo} className="img rounded mx-auto d-block img-responsive imgComp" alt="..."></img>
    </div>
  )
}