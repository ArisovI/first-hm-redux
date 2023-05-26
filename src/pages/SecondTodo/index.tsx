import { Button, Checkbox } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SecondTodoItem from "../../components/SecondTodoItem";
import { State } from "../../store/firstTodoReducer";
import { NEW_TODO } from "../../types/types";
const SecondTodo = () => {
  const todos = useSelector((state: State) => state.secondTodo);
  const dispatch = useDispatch();
  return (
    <div className="secondTodo">
      <div className="secondTodoTitle">
        <h2>Задача</h2>
        <Button
          variant="text"
          onClick={() => dispatch({ type: NEW_TODO, payload: "" })}
        >
          Добавить
        </Button>
      </div>
      <div className="secondTodoContent">
        {todos
          .filter((item) => item.status !== true)
          .map((item) => (
            <ul className="statusFalse">
              <SecondTodoItem key={item.id} item={item} />
            </ul>
          ))}
        {todos
          .filter((item) => item.status !== false)
          .map((item, i) => (
            <ul className="statusTrue">
              <SecondTodoItem key={item.id} item={item} />
            </ul>
          ))}
      </div>
    </div>
  );
};

export default SecondTodo;
