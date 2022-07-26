import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import './Navbar.css'

const Navbar = () => {

    const [icon, setIcon] = useState(false);

    const handleClick = () => {
        setIcon(!icon)
    }

    const closeSideDrawer = () => {
        setIcon(false)
    }
    return (
        <>
            <nav>
                <div className="navbar">
                    <div className="navbar__logo">
                        <Link to="/" onClick={closeSideDrawer}>Logo</Link>
                    </div>
                    <div className="navbar__item">
                        <ul className={
                            icon ? 'navbar__links active' : 'navbar__links'
                        }>
                            <li>
                                <Link to='/' onClick={closeSideDrawer}>Home</Link>
                            </li>
                            <li>
                                <Link to='/products' onClick={closeSideDrawer}>Products</Link>
                            </li>
                            <li>
                                <Link to='/about' onClick={closeSideDrawer}>About</Link>
                            </li>
                            <li>
                                <Link to='/contact' onClick={closeSideDrawer}>Contact</Link>
                            </li>
                            <li className='signup-btn' >
                                <Link to='/signup' onClick={closeSideDrawer}>SignUp</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='nav-toggle' onClick={handleClick}>
                        {
                            icon ? <MdOutlineClose /> : <MdOutlineMenu />
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar