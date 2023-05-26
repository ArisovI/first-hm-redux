import {
  CHANGE_STATUS,
  DELETE_TODO,
  todoState,
  NEW_TODO,
  productsState,
  CHANGE_VALUE,
  cart,
  ADD_TO_CART,
  DELETE_TO_CART,
  INCREMENT,
  DECREMENT,
} from "../types/types";

export interface State {
  firstTodo: todoState[];
  secondTodo: todoState[];
  shop: productsState[];
  cart: cart[];
}
const initialState: State = {
  firstTodo: [],
  secondTodo: [],
  shop: [
    {
      id: 1,
      name: "random",
      price: 150,
      img: "./img/img1.jpg",
      count: 1,
    },
    {
      id: 2,
      name: "random 2",
      price: 300,
      img: "./img/img2.jpg",
      count: 1,
    },
  ],
  cart: [],
};
const firstTodoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case NEW_TODO:
      const newTodo = {
        id: state.firstTodo.length + 1,
        value: action.payload,
        status: false,
      };

      const secondNewTodo = {
        id: state.secondTodo.length + 1,
        value: action.payload,
        status: false,
      };

      return {
        ...state,
        firstTodo: [...state.firstTodo, newTodo],
        secondTodo: [...state.secondTodo, secondNewTodo],
      };

    case CHANGE_VALUE:
      const { item, newValue } = action.payload;

      const newState = state.secondTodo.map((todo) => {
        if (todo.id === item.id) {
          return { ...todo, value: newValue };
        }
        return todo;
      });

      return {
        ...state,
        secondTodo: newState,
      };

    case DELETE_TODO:
      const firstFilterState = state.firstTodo.filter(
        (item) => item.id !== action.payload
      );
      const secondFilterState = state.secondTodo.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        firstTodo: firstFilterState,
        secondTodo: secondFilterState,
      };

    case CHANGE_STATUS:
      const updatedFirstTodo = state.firstTodo.map((item) => {
        if (item.id === action.payload) {
          return { ...item, status: !item.status };
        }
        return item;
      });
      const updatedSecondTodo = state.secondTodo.map((item) => {
        if (item.id === action.payload) {
          return { ...item, status: !item.status };
        }
        return item;
      });

      return {
        ...state,
        firstTodo: updatedFirstTodo,
        secondTodo: updatedSecondTodo,
      };

    case ADD_TO_CART:
      const findIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (findIndex !== -1) {
        state.cart[findIndex].count++;
      } else {
        state.cart.push(action.payload);
      }
      return state;

    case DELETE_TO_CART:
      const filterCart = state.cart.filter(
        (item) => item.id !== action.payload
      );

      return {
        ...state,
        cart: filterCart,
      };

    case INCREMENT:
      const increment = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });

      return { ...state, cart: increment };

    case DECREMENT:
      const decrement = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          if (item.count > 1) {
            item.count--;
          }
        }
        return item;
      });
      return { ...state, cart: decrement };
    default:
      return state;
  }
};
export default firstTodoReducer;
