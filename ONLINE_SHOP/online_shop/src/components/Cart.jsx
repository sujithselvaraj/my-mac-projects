import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import '/Users/sujiths/vscodeprojects/ONLINE_SHOP/online_shop/src/style.css'

const Cart = () => {
  const selector=useSelector(state=>state)
  const dispatch=useDispatch();

  const cartProducts=selector.cartProducts;
  return (
    <div className='cart'>
     {cartProducts.length>0 ? cartProducts.map(item =>
     <div className='cartItem'>
      <div className='cartItemImg'>
          <img src={item.image} alt="" />
        </div>

        <div className='cartItemInfo'>
          <h3>{item.name}</h3>
          <span>Color: {item.color}</span>
        </div>

        <div className='cartItemQuantity'>
          <button>+</button>
          <span>{item.inCart}</span>
          <button>-</button>
        </div>

        <div className='cartItemPrice'>
          <h3>{item.price} $</h3>
        </div>

        <div className='removeCartItem'>
            <button></button>
        </div>
      </div>
     ):<h2>Cart Is Empty</h2>}
    </div>
  )
}

export default Cart
