// import { Button, Checkbox } from "@mui/material";
// import SecondTodoItem from "../../components/SecondTodoItem";
// import { newTodo } from "../../store/secondTodoReducer";
// import { useAppDispatch, useAppSelector } from "../../store/store";
// import { defaultState } from "../../types/types";
// const SecondTodo = () => {
//   const dispatch = useAppDispatch();
//   const { secondTodo } = useAppSelector(
//     (state: defaultState) => state.secondTodo
//   );
//   return (
//     <div className="secondTodo">
//       <div className="secondTodoTitle">
//         <h2>Задача</h2>
//         <Button variant="text" onClick={() => dispatch(newTodo(""))}>
//           Добавить
//         </Button>
//       </div>
//       <div className="secondTodoContent">
//         {secondTodo.map((item) => (
//           <ul
//             className={item.status ? "statusTrue" : "statusFalse"}
//             key={item.id}
//           >
//             <SecondTodoItem item={item} />
//           </ul>
//         ))}
//       </div>
//     </div>
//   );
// };

import { Button } from "@mui/material";
import SecondTodoItem from "../../components/SecondTodoItem";
import { newTodoo } from "../../store/secondTodoReducer";
import { clearTodo } from "../../store/secondTodoReducer";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { defaultState } from "../../types/types";

// export default SecondTodo;
const SecondTodo = () => {
  const dispatch = useAppDispatch();
  const { secondTodo } = useAppSelector(
    (state: defaultState) => state.secondTodo
  );
  const firstEl = secondTodo[0];
  let checkStatus;
  if (firstEl !== undefined) {
    checkStatus = firstEl.status;
  }

  const filteredTodo = secondTodo.filter((item) => !item.status);

  return (
    <div className="secondTodo">
      <div className="secondTodoContent">
        <div className="secondTodoTitle">
          <h2>Задача</h2>
          <Button variant="text" onClick={() => dispatch(newTodoo(""))}>
            Добавить
          </Button>
        </div>
        {filteredTodo.map((item) => (
          <ul className="statusFalse" key={item.id}>
            <SecondTodoItem item={item} />
          </ul>
        ))}
      </div>
      <div
        className="statusTrue"
        style={{ display: checkStatus ? "block" : "none" }}
      >
        <div className="statusTrueTitle">
          <span>Выполнено</span>
          <Button variant="text" onClick={() => dispatch(clearTodo())}>
            Удалить
          </Button>
        </div>
        {secondTodo
          .filter((item) => item.status)
          .map((item) => (
            <ul key={item.id}>
              <SecondTodoItem item={item} />
            </ul>
          ))}
      </div>
    </div>
  );
};

export default SecondTodo;
