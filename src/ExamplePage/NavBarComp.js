import React from 'react'
import './NavBarCompStyle.css';
import LogoComp from './LogoComp';

export default function NavBarComp() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg nvbcomp">
          <div className="container-fluid">
            <a className="navbar-brand disabled" ><LogoComp/></a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" >Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" >Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" >Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a> 
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}
