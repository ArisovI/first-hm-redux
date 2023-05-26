import { TextField, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FirstTodoItem from "../../components/FirstTodoItem";
import { State } from "../../store/firstTodoReducer";
import { NEW_TODO } from "../../types/types";

const FirstTodo = () => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const todos = useSelector((state: State) => state.firstTodo);
  const dispatch = useDispatch();

  const handleNewTodo = () => {
    if (inputValue.trim().length > 0) {
      dispatch({ type: NEW_TODO, payload: inputValue });
      setInputValue("");
    } else {
      alert("Вы ничего не написали");
    }
  };

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
        {todos.map((item) => (
          <FirstTodoItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default FirstTodo;
