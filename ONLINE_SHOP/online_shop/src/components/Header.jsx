

import React from 'react'
import {NavLink} from 'react-router-dom'
import '/Users/sujiths/vscodeprojects/ONLINE_SHOP/online_shop/src/style.css'

const Header = () => {
  return (
    <header id="header">
    <NavLink to="/products">

        <img className='sitelogo' src="https://img.icons8.com/bubbles/344/mac-os.png" alt="" />

    </NavLink>
    <form className="search">
        <input type="text" placeholder="search.."></input>
        <button>Accept</button>

    </form>
    <div className="cartlink">
    <img src="https://img.icons8.com/bubbles/344/shopping-cart.png" alt="" />
    <NavLink to="/cart">Cart</NavLink>
    <span>0</span>
    </div>

    
</header>
  )
}

export default Header
