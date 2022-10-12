import {useState} from "react";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meal/Meals";
import Cart from "./Component/Cart/Cart";
import CartProvider from "./Store/CartProvider";



const App = () => {

const [cartIsShown,setCartIsShown] = useState(false);

const showCartHandeler = () => {
  setCartIsShown(true);
}

const hideCartHandeler = () => {
   setCartIsShown(false);
}

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose = {hideCartHandeler}/>}
      <Header onShowCart = {showCartHandeler}/>

    <main>
      <Meals />
    </main>
    </CartProvider>

  );
}

export default App;
