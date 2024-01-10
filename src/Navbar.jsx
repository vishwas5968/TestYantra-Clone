import React from 'react'
import logo from "./images/asset1.png"
import {Link} from "react-router-dom"
// import {ImSearch} from "react-icons/im"
import {BiSearchAlt2} from "react-icons/bi"

const Navbar = () => {
  return (
    <div className='navs'>
    <div className='navi'>
        <div>
            <img src={logo} alt={logo} />
        </div>
        <div className='link'>
        <ul>
            <li>
                <Link to="/Home">Home</Link>
            </li>
            <li>
                <Link to="/Services">Services</Link>
            </li>
            <li>
                <Link to="/Products">Products</Link>
            </li>
            <li>
                <Link to="/Industries">Industries</Link>
            </li>
            <li>
                <Link to="/Articles">Articles</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <BiSearchAlt2/>
            </li>
        </ul>
        </div>
    </div>
    </div>
  )
}

export default Navbar