import { Checkbox } from "@mui/material";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { CHANGE_STATUS, DELETE_TODO, todoState } from "../types/types";
import { useDispatch } from "react-redux";
interface ISecondStatusProps {
  item: todoState;
}
const SecondStatus: React.FC<ISecondStatusProps> = ({ item }) => {
  const dispatch = useDispatch();
  const [active, setActive] = React.useState<boolean>(false);

  return (
    <li style={{ background: "red" }}>
      <Checkbox
        checked={item.status}
        onClick={() => dispatch({ type: CHANGE_STATUS, payload: item.id })}
      />
      <input
        type="text"
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

export default SecondStatus;
