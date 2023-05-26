import React from "react";
import { useDispatch } from "react-redux";
import {
  DECREMENT,
  DELETE_TO_CART,
  INCREMENT,
  productsState,
} from "../types/types";
interface ICartItemProps {
  item: productsState;
}
const CartItem: React.FC<ICartItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <>
      <li>
        <button
          onClick={() => dispatch({ type: DELETE_TO_CART, payload: item.id })}
        >
          X
        </button>
        <span>{item.name}</span>
        <img src={item.img} alt="" />
        <div>
          <button onClick={() => dispatch({ type: DECREMENT, payload: item })}>
            -
          </button>
          <span>{item.count}</span>
          <button onClick={() => dispatch({ type: INCREMENT, payload: item })}>
            +
          </button>
        </div>
        <span>{Math.floor(item.price * item.count)}</span>
      </li>
    </>
  );
};

export default CartItem;
