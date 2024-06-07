import { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "./UI/Modal";
import { formattedPrice } from "../util/formatter";
import Input from "./UI/Input";
import Button from "./UI/Button";
import userProgressContext from "../store/UserPorgessContext";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export default function Checkout() {
  const form = useForm();
  const { register, control, handleSubmit } = form;
  //   const { name, ref, onChange, onBlur } = register("full-name"); // One approach
  const cartCtx = useContext(CartContext);
  const userPorgressCtx = useContext(userProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    userPorgressCtx.hideCheckout();
  }

  function onSubmit(data) {
    console.log("form submitted", data);
  }

  return (
    <Modal open={userPorgressCtx.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Checkout</h2>
        <p>Total Amount : {formattedPrice.format(cartTotal)}</p>
        <Input
          label="Full Name"
          type="text"
          id="full-name"
          {...register("full-name")}
        />
        <Input
          label="Email Address"
          type="email"
          id="email"
          {...register("email")}
        />
        <Input label="Street" type="text" id="street" {...register("street")} />
        <div className="control-row">
          <Input
            label="Postal Code"
            type="text"
            id="postal-code"
            {...register("postal-code")}
          />
          <Input label="City" type="text" id="city" {...register("city")} />
        </div>
        <div className="modal-actions">
          <Button onClick={handleClose} type="button" textOnly>
            Close
          </Button>
          <Button>Submit Order</Button>
        </div>
      </form>
      <DevTool control={control} />
    </Modal>
  );
}
