import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div className="navbar">
    <h2 className="heading">LOGO</h2>
    <Link to="/home">HOME</Link>
    <a>SHOP</a>
    <a>SALES</a>
    <a>OUR MISSION</a>
    <Link to="/Contact">CONTACT</Link>
    <img className="img1" src="./image/search-interface-symbol.png"/>
        <img className="img2" src="./image/shopping-bag.png"/>
        </div>
    </div>
  )
}

export default Navbar