import React, { useState } from 'react';
import "./navbar.styles.scss"
import {  Link } from "react-router-dom";
import Dropdown from '../dropdown/dropdown.component';
import { VscArrowSmallDown } from "react-icons/vsc";
import { FaBars } from "react-icons/fa";
import test from '../../assets/test.png';


function Navbar({ toogle })  {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };


  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          <img id='logo-img' src={test} alt="Bulgariatelep church"></img>    
          <div className="logo-text">
                <p>Bulgáriatelepi</p>
                <p>Református Gyülekezet</p>
          </div>
        </Link>

        <div className="menuBars" onClick={toogle}>
          <FaBars />
        </div>



        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to='/about' className='nav-links'>
              RÓLUNK
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/alkalmaink'
              className='nav-links'
              
            >
              ALKALMAINK 
              <VscArrowSmallDown className="dropdownArrow"/>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/predikaciok'
              className='nav-links'
            >
              PRÉDIKÁCIÓK
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'
            >
              ELÉRHETŐSÉG
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;