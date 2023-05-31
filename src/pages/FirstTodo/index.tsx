import { TextField, Button } from "@mui/material";
import React from "react";
import FirstTodoItem from "../../components/FirstTodoItem";
import {
  firstTodoItem,
  firstTodoState,
  newTodo,
} from "../../store/firstTodoReducer";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { defaultState } from "../../types/types";

const FirstTodo = () => {
  const dispatch = useAppDispatch();
  const { firstTodo } = useAppSelector(
    (state: defaultState) => state.firstTodo
  );

  const [inputValue, setInputValue] = React.useState<string>("");
  const handleNewTodo = () => {
    if (inputValue.trim().length > 0) {
      dispatch(newTodo(inputValue));
      setInputValue("");
    } else {
      alert("Вы ничего не написали");
    }
  };

  console.log(firstTodo);

  return (
    <div className="firstTodo">
      <h2>Список задач</h2>
      <div>
        <TextField
          id="outlined-basic"
          label="Текст"
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button variant="contained" onClick={() => handleNewTodo()}>
          Добавить
        </Button>
      </div>
      <ul>
        {firstTodo.map((item: firstTodoItem) => (
          <FirstTodoItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default FirstTodo;
