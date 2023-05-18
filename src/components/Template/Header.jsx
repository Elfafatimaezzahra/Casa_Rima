import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../../img/logo-casa.png'

function Header() {
    return(
        <header className='header'>
            <div className='header_logo'>
              <a href="/">  <img src={logo} alt='logo-casa' className='header_logo_img' /></a>
            </div>
            <nav className='header_nav'>
                <ul>
                <li className='header_nav_link'>
                        <NavLink
                            className={({ isActive }) => (isActive ? 'header_nav_link_navlink header_nav_link_active' : 'header_nav_link_navlink header_nav_link_inactive')}
                            title='Home'
                            end to='/LandingContent'
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li className='header_nav_link'>
                        <NavLink
                            className={({ isActive }) => (isActive ? 'header_nav_link_navlink header_nav_link_active' : 'header_nav_link_navlink header_nav_link_inactive')}
                            title='Accueil'
                            end to='/home'
                        >
                            Nos Services
                        </NavLink>
                    </li>
                    <li className='header_nav_link'>
                        <NavLink
                            className={({ isActive }) => (isActive ? 'header_nav_link_navlink header_nav_link_active' : 'header_nav_link_navlink header_nav_link_inactive')}
                            title='À propos'
                            end to='/about'
                        >
                            À propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header