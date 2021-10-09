import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import {useState} from 'react';
import CartProvider from "./store/CartProvider";
function App() {
  const [cartItemshown, setCartItemshown] = useState(false);

  const showCartHandler = () => {
    setCartItemshown(true)
  }

  const hideCartHandler = () => {
    setCartItemshown(false)
  }
  return (
    <CartProvider>
      {cartItemshown && <Cart hideCart={hideCartHandler}> </Cart>}
      <Header showCart={showCartHandler}></Header>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
