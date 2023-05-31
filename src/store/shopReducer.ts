interface productItem {
  img: string;
  price: number;
  name: string;
  id: number;
  count: number;
}
export interface shopState {
  shop: productItem[];
  products: productItem[];
}
const initialState: shopState = {
  shop: [],
  products: [
    {
      img: "./img/img1.jpg",
      price: 100,
      name: "bmw",
      id: 1,
      count: 1,
    },
    {
      img: "./img/img2.jpg",
      price: 200,
      name: "mers",
      id: 2,
      count: 1,
    },
  ],
};
const ADD_TO_CART = "addToCart";
const DELETE_TO_CART = "deleteToCart";

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (!state.shop.includes(action.payload)) {
        return {
          ...state,
          shop: [...state.shop, action.payload],
        };
      } else {
        return state;
      }
    case DELETE_TO_CART:
      const deleteState = state.shop.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        shop: deleteState,
      };
    default:
      return state;
  }
};
export const addToCart = (payload: any) => ({ type: ADD_TO_CART, payload });
export const deleteToCart = (payload: number) => ({
  type: DELETE_TO_CART,
  payload,
});
export default reducer;
