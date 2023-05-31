import { Checkbox } from "@mui/material";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { CHANGE_VALUE, defaultState, todoState } from "../types/types";
import { useAppDispatch, useAppSelector } from "../store/store";
import {
  changeStatus,
  deleteTodo,
  secondTodoState,
  upDateTodo,
} from "../store/secondTodoReducer";
interface ISecondTodoItemProps {
  item: todoState;
}
const SecondTodoItem: React.FC<ISecondTodoItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const [active, setActive] = React.useState<boolean>(false);
  // const inputValue = useAppSelector((state: defaultState) => {
  //   const foundItem = state.secondTodo.find((todo: any) => todo.id === item.id);
  //   return foundItem?.value || "";
  // });
  const { secondTodo } = useAppSelector(
    (state: defaultState) => state.secondTodo
  );
  const value = secondTodo.find((obj) => (obj.id === item.id ? obj.value : ""));
  const changeInput = (e: any) => {
    const newValue = e.target.value;
    dispatch({ type: CHANGE_VALUE, payload: { item, newValue } });
    dispatch(upDateTodo({ item, newValue }));
  };

  return (
    <li>
      <Checkbox
        checked={item.status}
        onClick={() => dispatch(changeStatus(item))}
      />
      <input
        value={value?.value}
        type="text"
        onChange={changeInput}
        readOnly={active}
        onDoubleClick={() => setActive(!active)}
        style={{ textDecoration: item.status ? "line-through" : "" }}
      />
      <ClearIcon onClick={() => dispatch(deleteTodo(item.id))} />
    </li>
  );
};

export default SecondTodoItem;
