import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { formattedPrice } from "../util/formatter";
import Button from "./UI/Button";
import userProgressContext from "../store/UserPorgessContext";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(userProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  function handleHideCart() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{formattedPrice.format(cartTotal)}</p>
      <div className="modal-actions">
        <Button textOnly onClick={handleHideCart}>
          Close
        </Button>
        <Button>Checkout</Button>
      </div>
    </Modal>
  );
}
