import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const updatedItems = [...state.items];
      if (existingCartItemIndex > -1) {
        const existingItems = state.items[existingCartItemIndex];
        const updatedItem = {
          ...existingItems,
          quantity: existingItems.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems.push({ ...action.item, quantity: 1 });
      }
      return { ...state, items: updatedItems };
    }
    case "REMOVE_ITEM": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      const updatedItems = [...state.items];

      if (existingCartItem.quantity === 1) {
        updatedItems.splice(existingCartItemIndex, 1);
      } else {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - 1,
        };
      }

      return { ...state, items: updatedItems };
    }
  }
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
  });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };

  console.log(cartContext);
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;