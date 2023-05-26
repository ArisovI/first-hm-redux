import { legacy_createStore as createStore } from "redux";
import firstTodoReducer from "./firstTodoReducer";
const store = createStore(firstTodoReducer);

export default store;
