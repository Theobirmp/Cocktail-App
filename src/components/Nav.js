import React from 'react'
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from "react-icons/gi"
import "../css/Navbar.css"
import { useRef } from 'react'

const Nav = () => {
    const dropDownMenu=useRef()
    function handleClick(){
        dropDownMenu.current.classList.toggle('show-drop-down')
    }
    return (
        <nav className="nav">
                <div className="nav-bar">
                    <div className="nav-logo">
                        <Link className="link-text" to="/"><img className="logo" src="../logo192.png" alt="LOGO" /></Link>
                    </div>
                    <ul className="nav-links-container">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/favourites">Favourites</Link>
                        <Link className="nav-link" to="/about">About</Link>
                    </ul>
                <button className="hamburger-menu-button" onClick={handleClick}><GiHamburgerMenu/></button>
                </div>
                <div ref={dropDownMenu} className="drop-down-menu">
                            <Link className="drop-down-link" to="/" onClick={handleClick}>Home</Link>
                            <Link className="drop-down-link" to="/about" onClick={handleClick}>About</Link>
                            <Link className="drop-down-link" to="/favourites" onClick={handleClick}>Favourites</Link>
                        </div>
                        </nav>
    )
}

export default Nav

