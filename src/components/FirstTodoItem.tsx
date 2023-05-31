import { Button } from "@mui/material";
import React from "react";
import { CHANGE_STATUS, DELETE_TODO, todoState } from "../types/types";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../store/store";
import { changeStatus, deleteTodo } from "../store/firstTodoReducer";

interface IFirstTodoItemProps {
  item: todoState;
}
const FirstTodoItem: React.FC<IFirstTodoItemProps> = ({ item }) => {
  const [active, setActive] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();

  return (
    <div>
      <li key={item.id}>
        <input
          onDoubleClick={() => dispatch(changeStatus(item))}
          style={{ textDecoration: item.status ? "line-through" : "" }}
          type="text"
          readOnly={!active}
          defaultValue={item.value}
        />

        <div>
          <Button variant="contained" onClick={() => setActive(!active)}>
            {!active && !item.status ? "Переименовать" : "Сохранить"}
          </Button>
          <Button
            variant="contained"
            onClick={() => dispatch(deleteTodo(item.id))}
          >
            Удалить
          </Button>
        </div>
      </li>
    </div>
  );
};

export default FirstTodoItem;
