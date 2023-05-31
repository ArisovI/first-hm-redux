import { legacy_createStore as createStore, combineReducers } from "redux";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import firstTodoReducer from "./firstTodoReducer";
import secondTodoReducer from "./secondTodoReducer";
import shopReducer from "./shopReducer";
const rootReducer = combineReducers({
  firstTodo: firstTodoReducer,
  secondTodo: secondTodoReducer,
  shop: shopReducer,
});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: any = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
