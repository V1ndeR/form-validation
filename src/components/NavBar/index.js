import React from 'react';

import './navbar.css';

import iconTernopil from '../../img/Ternopil.png';
import iconHamburger from '../../img/icon-hamburger.png';

export function NavBar() {
    return (
        <header className="main_header">
            <nav className="main_nav">
                <ul className="site_nav">
                    <li className="nav-city"><img width={49} alt="Тернополь икон" src={iconTernopil} /></li>
                    <li className="nav-city"><b>Тернопіль</b></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-warning" href="/#" id="navbarScrollingDropdown" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            укр
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                            <li><a className="dropdown-item" href="/#">рус</a></li>
                            <li><a className="dropdown-item" href="/#">eng</a></li>
                        </ul>
                    </li>
                    <li className="nav-weather weather-icon">&#9729;</li>
                    <li className="nav-weather weather-temp"><b>+24</b></li>
                    <li className="nav-weather cloud-icon"><b>ХМАРНО</b></li>
                </ul>
                <ul className="user_nav">
                    <li><button className="nav-btn btn btn-warning">ПЕРШИЙ РАЗ У ТЕРНОПОЛІ?</button></li>
                    <li className="nav-menu">МЕНЮ</li>
                    <li className="nav-menu"><img width={49} alt="Иконка меню" src={iconHamburger} /></li>
                </ul>
            </nav>
        </header>
    )
}