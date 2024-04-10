import React from 'react';
import { Link } from 'react-router-dom';
import { NavItems } from '../../data/NavItems';
import { MdClose } from "react-icons/md";
import './burgerMenu.styles.scss';
import test from '../../assets/test.png';

const BurgerMenu = ({ isOpen, toogle }) => {

    return (
        <div>

            <div className={`dropdownContainer ${isOpen ? "dropdownContainer--on" : "dropdownContainer--off"}`} onClick={toogle}>
                <Link to='/' className="dropdown-navbar-logo">
                    <img id='dropdown-logo-img' src={test} alt="Bulgariatelep church"></img>    
                    <p> Főoldal </p>
                </Link>
                <div className="icon" onClick={toogle}>
                    <MdClose className="closeIcon"/>
                </div>
                <div className="dropdownWrapper">
                <div className="dropdownMenu">
                        {NavItems.map((item, index) => (
                            <Link className="dropdownLink" to={item.path} key={index}>
                                {item.title}
                            </Link>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BurgerMenu;
