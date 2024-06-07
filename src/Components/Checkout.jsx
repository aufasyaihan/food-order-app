import { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "./UI/Modal";
import { formattedPrice } from "../util/formatter";
import Input from "./UI/Input";
import Button from "./UI/Button";
import userProgressContext from "../store/UserPorgessContext";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userPorgressCtx = useContext(userProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    userPorgressCtx.hideCheckout();
  }

  return (
    <Modal open={userPorgressCtx.progress === "checkout"} onClose={handleClose}>
      <form action="">
        <h2>Checkout</h2>
        <p>Total Amount : {formattedPrice.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="full-name" name="full-name" />
        <Input label="Email Address" type="email" id="email" name="email" />
        <Input label="Street" type="text" id="street" name="street" />
        <div className="control-row">
          <Input
            label="Postal Code"
            type="text"
            id="postal-code"
            name="postal-code"
          />
          <Input label="City" type="text" id="city" name="city" />
        </div>
        <div className="modal-actions">
          <Button onClick={handleClose} type="button" textOnly>
            Close
          </Button>
          <Button>Submit Order</Button>
        </div>
      </form>
    </Modal>
  );
}
