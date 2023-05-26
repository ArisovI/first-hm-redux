import { Checkbox } from "@mui/material";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import {
  CHANGE_STATUS,
  CHANGE_VALUE,
  DELETE_TODO,
  todoState,
} from "../types/types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { State } from "../store/firstTodoReducer";
interface ISecondTodoItemProps {
  item: todoState;
}
const SecondTodoItem: React.FC<ISecondTodoItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const [active, setActive] = React.useState<boolean>(false);
  // const [inputValue, setInputValue] = React.useState<string>("");
  const inputValue = useSelector(
    (state: State) =>
      state.secondTodo.find((todo) => todo.id === item.id)?.value || ""
  );
  const changeInput = (e: any) => {
    const newValue = e.target.value;
    dispatch({ type: CHANGE_VALUE, payload: { item, newValue } });
  };
  return (
    <li>
      <Checkbox
        checked={item.status}
        onClick={() => dispatch({ type: CHANGE_STATUS, payload: item.id })}
      />
      <input
        type="text"
        value={inputValue}
        onChange={changeInput}
        readOnly={active}
        onDoubleClick={() => setActive(!active)}
        style={{ textDecoration: item.status ? "line-through" : "" }}
      />
      <ClearIcon
        onClick={() => dispatch({ type: DELETE_TODO, payload: item.id })}
      />
    </li>
  );
};

export default SecondTodoItem;
