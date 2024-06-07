import { formattedPrice } from "../util/formatter";

export default function CartItem({ item, onIncrease, onDecrease }) {
  return (
    <li className="cart-item">
      <div>
        {item.name} - {item.quantity} x {formattedPrice.format(item.price)}
      </div>
      <div className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <p>{item.quantity}</p>
        <button onClick={onIncrease}>+</button>
      </div>
    </li>
  );
}
