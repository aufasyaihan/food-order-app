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
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
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

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: data,
        },
      }),
    });
  }

  return (
    <Modal open={userPorgressCtx.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Checkout</h2>
        <p>Total Amount : {formattedPrice.format(cartTotal)}</p>
        <Input
          label="Full Name"
          type="text"
          id="name"
          {...register("name", {
            required: {
              value: true,
              message: "Name is required",
            },
          })}
        />
        {errors["name"] && <p className="error">{errors["name"].message}</p>}
        <Input
          label="Email Address"
          type="email"
          id="email"
          {...register("email", {
            required: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email format",
            },
          })}
        />
        {errors["email"] && <p className="error">{errors["email"].message}</p>}
        <Input
          label="Street"
          type="text"
          id="street"
          {...register("street", {
            required: {
              value: true,
              message: "Street is required",
            },
          })}
        />
        {errors["street"] && (
          <p className="error">{errors["street"].message}</p>
        )}
        <div className="control-row">
          <div>
            <Input
              label="Postal Code"
              type="text"
              id="postal-code"
              {...register("postal-code", {
                required: {
                  value: true,
                  message: "Postal Code is required",
                },
              })}
            />
            {errors["postal-code"] && (
              <p className="error">{errors["postal-code"].message}</p>
            )}
          </div>
          <div>
            <Input
              label="City"
              type="text"
              id="city"
              {...register("city", {
                required: {
                  value: true,
                  message: "City is required",
                },
              })}
            />
            {errors["city"] && (
              <p className="error">{errors["city"].message}</p>
            )}
          </div>
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
