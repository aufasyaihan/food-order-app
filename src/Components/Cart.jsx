import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { formattedPrice } from "../util/formatter";
import Button from "./UI/Button";

export default function Cart() {
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  return (
    <Modal className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{formattedPrice.format(cartTotal)}</p>
      <div className="modal-action">
        <Button textOnly>Close</Button>
        <Button>Checkout</Button>
      </div>
    </Modal>
  );
}
