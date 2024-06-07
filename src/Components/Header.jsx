import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import userProgressContext from "../store/UserPorgessContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(userProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="foodLogo" />
        <h1>Food Order</h1>
      </div>
      <div>
        <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
      </div>
    </header>
  );
}
