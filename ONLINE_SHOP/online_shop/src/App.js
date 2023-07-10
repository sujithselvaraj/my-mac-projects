
import React from "react";
import Products from '/Users/sujiths/vscodeprojects/ONLINE_SHOP/online_shop/src/components/Products.jsx'
import Layout from '/Users/sujiths/vscodeprojects/ONLINE_SHOP/online_shop/src/components/Layout.jsx'
import Cart from '/Users/sujiths/vscodeprojects/ONLINE_SHOP/online_shop/src/components/Cart.jsx'
import {Route,Routes} from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/products' elements={<Products/>}></Route>
        <Route path='/cart/' element={<Cart/>}></Route>


      </Route>
      </Routes>
    </>
  );
}

export default App;
