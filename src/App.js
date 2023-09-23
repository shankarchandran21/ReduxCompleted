import CardContainer from './components/CardContainer.jsx';
import Navbar from './components/Navbar.jsx';
// import './features/cart/cartSlice.js'

import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import { useEffect } from 'react';


function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);



  return<main>
       <Navbar/>
       <CardContainer/>
  </main>
}
export default App;
