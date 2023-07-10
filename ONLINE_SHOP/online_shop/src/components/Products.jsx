import React from 'react'
import {useSelector ,useDispatch} from 'react-redux'

const Products = () => {

    const selector=useSelector(state=>state);
    const dispatch=useDispatch();

    const products=selector.products;
    console.log(products)
    const cartproducts=selector.cartproducts;
  
    function addToCart(){
      let isIncart=false;
      cartproducts.forEach(e1 => {
        if(id===e1.id)isInCart=true

      })
      if(!isInCart){
        dispatch({type:"ADD_TO_CART",payload:products.find((product)=> id ===product.id)})
      }
      console.log(cartProducts);
    }



  return (
    <div className='productsList'>
      {
        products.map(item=>
          <div className='product' key={item.id}>
            <img src={item.image} alt="" />
            <h3>{item.name}</h3>
            <span>Color: {item.color}</span>

            <div className='priceBlock'>
                <span className='productPrice'>{item.price}$</span>
                <button onClick={() =>addToCart(item.id)}>BUY</button>
              </div>
            </div>
          )
      }
    </div>
  )
}

export default Products
