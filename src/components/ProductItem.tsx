import React from "react";
import { useDispatch } from "react-redux";
import { ADD_TO_CART, cart, productsState } from "../types/types";
interface IProductItemProps {
  item: productsState;
}
const ProductItem: React.FC<IProductItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <>
      <li>
        <img src={item.img} alt={item.img} />
        <span>{item.name}</span>
        <button onClick={() => dispatch({ type: ADD_TO_CART, payload: item })}>
          Add To Cart
        </button>
      </li>
    </>
  );
};

export default ProductItem;
