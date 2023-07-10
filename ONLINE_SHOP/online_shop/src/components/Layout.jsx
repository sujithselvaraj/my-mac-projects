

import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'
import "/Users/sujiths/vscodeprojects/ONLINE_SHOP/online_shop/src/style.css";
import Products from '/Users/sujiths/vscodeprojects/ONLINE_SHOP/online_shop/src/components/Products.jsx'
const Layout = () => {
  return (
    <>
        <Header/>
         <Outlet/>
         <Products/>
    </>
  )
}

export default Layout
