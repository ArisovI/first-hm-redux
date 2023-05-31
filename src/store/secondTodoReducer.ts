export interface secondTodoItem {
  id: number;
  value: string;
  status: boolean;
}
export interface secondTodoState {
  secondTodo: secondTodoItem[];
}
const initialState: secondTodoState = {
  secondTodo: [],
};
const NEW_TOODD = "newTodo";
const DELETE_TODO = "deleteTodo";
const CHANGE_STATUS = "changeStatus";
const UPDATE_TODO = "upDateTodo";
const CLEAR_TODO = "clearTodo";
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case NEW_TOODD:
      const todo = {
        id: state.secondTodo.length + 1,
        value: action.payload,
        status: false,
      };
      return {
        ...state,
        secondTodo: [...state.secondTodo, todo],
      };

    case DELETE_TODO:
      const deleteTodo = state.secondTodo.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, secondTodo: deleteTodo };

    case CHANGE_STATUS:
      const changeTodo = state.secondTodo.map((item) => {
        if (item.id === action.payload.id) {
          item.status = !item.status;
        }
        return item;
      });

      return {
        ...state,
        secondTodo: changeTodo,
      };
    case UPDATE_TODO:
      const { item, newValue } = action.payload;
      const newState = state.secondTodo.map((obj) => {
        if (obj.id === item.id) {
          return { ...obj, value: newValue };
        }
        return obj;
      });
      return {
        ...state,
        secondTodo: newState,
      };
    case CLEAR_TODO:
      return { ...state, secondTodo: [] };
    default:
      return state;
  }
};

export const newTodoo = (payload: string) => ({ type: NEW_TOODD, payload });
export const deleteTodo = (payload: number) => ({
  type: DELETE_TODO,
  payload,
});
export const changeStatus = (payload: secondTodoItem) => ({
  type: CHANGE_STATUS,
  payload,
});
export const upDateTodo = (payload: any) => ({ type: UPDATE_TODO, payload });
export const clearTodo = () => ({ type: CLEAR_TODO });
export default reducer;
