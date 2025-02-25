/* eslint-disable react/prop-types */
import DoneIcon from "@mui/icons-material/Done";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { checkTodo } from "../../redux/slice/registeredTodo"; // Import action

const Donebtn = ({ task }) => {
  const dispatch = useDispatch();

  // Get the correct todo item from Redux state
  const isCompleted = useSelector(
    (state) =>
      state.registeredTodo.tasks.find((t) => t.task === task)?.isCompleted
  );

  function handleCheck(e) {
    e.preventDefault();
    dispatch(checkTodo(task));
  }

  return (
    <button
      onClick={handleCheck}
      className={`text-white ${
        isCompleted ? "bg-green-600" : "bg-black"
      } p-1 rounded text-xl`}
    >
      {isCompleted ? (
        <DoneIcon fontSize="large" />
      ) : (
        <Tooltip title="Mark as Done" arrow placement="top">
          <CheckBoxOutlineBlankIcon fontSize="large" />
        </Tooltip>
      )}
    </button>
  );
};

export default Donebtn;
