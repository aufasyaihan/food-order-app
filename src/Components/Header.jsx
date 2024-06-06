import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

export default function Header() {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="foodLogo" />
        <h1>Food Order</h1>
      </div>
      <div>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </div>
    </header>
  );
}
