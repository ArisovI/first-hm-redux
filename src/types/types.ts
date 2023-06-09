import { firstTodoState } from "../store/firstTodoReducer";
import { secondTodoState } from "../store/secondTodoReducer";
import { shopState } from "../store/shopReducer";

export interface todoState {
  id: number;
  value: string;
  status: boolean;
}

export interface productsState {
  img: string;
  price: number;
  name: string;
  id: number;
  count: number;
}

export interface cart {
  img: string;
  price: number;
  name: string;
  id: number;
  count: number;
}

export interface TaskState {
  id: number;
  value: string;
  status: boolean;
}

export interface defaultState {
  firstTodo: firstTodoState;
  secondTodo: secondTodoState;
  shop: shopState;
}

export const NEW_TODO = "newTodo";
export const DELETE_TODO = "deleteTodo";
export const CHANGE_STATUS = "changeStatus";
export const LOAD_TODOS = "loadTodos";
export const CHANGE_VALUE = "changeValue";
export const ADD_TO_CART = "addToCart";
export const DELETE_TO_CART = "deleteToCart";
export const INCREMENT = "increment";
export const DECREMENT = "decrement";
