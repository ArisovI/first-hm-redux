export interface firstTodoItem {
  id: number;
  value: string;
  status: boolean;
}
export interface firstTodoState {
  firstTodo: firstTodoItem[];
}
const initialState: firstTodoState = {
  firstTodo: [],
};
const NEW_TOOD = "newTodo";
const DELETE_TODO = "deleteTodo";
const CHANGE_STATUS = "changeStatus";
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case NEW_TOOD:
      const todo = {
        id: state.firstTodo.length + 1,
        value: action.payload,
        status: false,
      };
      return {
        ...state,
        firstTodo: [...state.firstTodo, todo],
      };

    case DELETE_TODO:
      const deleteTodo = state.firstTodo.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, firstTodo: deleteTodo };

    case CHANGE_STATUS:
      const changeTodo = state.firstTodo.map((item) => {
        if (item.id === action.payload.id) {
          item.status = !item.status;
        }
        return item;
      });
      return {
        ...state,
        firstTodo: changeTodo,
      };
    default:
      return state;
  }
};

export const newTodo = (payload: any) => ({ type: NEW_TOOD, payload });
export const deleteTodo = (payload: number) => ({
  type: DELETE_TODO,
  payload,
});
export const changeStatus = (payload: firstTodoItem) => ({
  type: CHANGE_STATUS,
  payload,
});
export default reducer;
