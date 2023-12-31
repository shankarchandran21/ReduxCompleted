import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import Carditem from './Carditem';
// import cartItems from '../cartItems'
import {clearCart} from '../features/cart/cartSlice'

function CardContainer() {

const {cartItems,total,amount} =useSelector((store)=>store.cart)
const dispatch = useDispatch();
console.log(clearCart)


  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }


  return (
    <section className='cart'>
    <header>
      <h2>your bag</h2>
    </header>
    <div>
      {cartItems.map((item) => {
        return < Carditem key={item.id} {...item} />;
      })}
    </div>
    <footer>
      <hr />
      <div className='cart-total'>
        <h4>
          total <span>${total.toFixed(2)}</span>
        </h4>
      </div>
      <button className='btn clear-btn' onClick={()=>dispatch(clearCart())} >
        clear cart
      </button>
    </footer>
  </section>
  )
}

export default CardContainer