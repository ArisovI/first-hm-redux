import { Button } from "@mui/material";
import React from "react";
import { CHANGE_STATUS, DELETE_TODO, todoState } from "../types/types";
import { useDispatch } from "react-redux";

interface IFirstTodoItemProps {
  item: todoState;
}
const FirstTodoItem: React.FC<IFirstTodoItemProps> = ({ item }) => {
  const [active, setActive] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  return (
    <div>
      <li key={item.id}>
        <input
          onDoubleClick={() =>
            dispatch({ type: CHANGE_STATUS, payload: item.id })
          }
          style={{ textDecoration: item.status ? "line-through" : "" }}
          type="text"
          readOnly={!active}
          defaultValue={item.value}
        />

        <div>
          <Button variant="contained" onClick={() => setActive(!active)}>
            {!active ? "Переименовать" : "Сохранить"}
          </Button>
          <Button
            variant="contained"
            onClick={() => dispatch({ type: DELETE_TODO, payload: item.id })}
          >
            Удалить
          </Button>
        </div>
      </li>
    </div>
  );
};

export default FirstTodoItem;
