// import React from 'react'
import "./navbar.css"
import logoImg from "../../assets/editLogo.jpg"
import { useState } from "react";
const Navbar = ({ isLoggedIn, handleLogin, handleLogout}) => {
// const [isLoggedIn, setIsLoggedIn] = useState(false);

// const handleLogin = () => {
//   setIsLoggedIn(true);
// };

// const handleLogout = () => {
//   setIsLoggedIn(false);
// };

  return (
    <div className='navbar navbar-expand-lg navbar-light bg sticky-top'>
            <a className="navbar-brand p-2" href="/">
            <img src={logoImg} className="logo-img" alt='logo' />
            </a>
            <ul className="navbar-nav p-2">
        <div className="routes">
          <li className="nav-item">
            <a href='/' className="nav-link ">Home</a>
          </li>
          <li className="nav-item">
            <a href='/vission' className="nav-link">Vision</a>
          </li>
          <li className="nav-item">
            <a href='/mission' className="nav-link">Mission</a> 
          </li>
          <li className="nav-item">
            <a href='/login' className="nav-link">Login</a> 
          </li>
          <li className="nav-item">
            <a href='/maps' className="nav-link">Eco-Stores</a> 
          </li>
          <li className="nav-item">
            <a href='/knowMore' className="nav-link">Knowledge</a> 
          </li>
          <li className="nav-item">
            <a  rel="noreferrer" target="_blank" href='https://www.instagram.com/gitam.lostandfound/' className="nav-link"><i className="fab fa-instagram fa-2x"></i>    </a> 
          </li>

        
        </div>
            </ul>
    </div>
  )
}

export default Navbar
