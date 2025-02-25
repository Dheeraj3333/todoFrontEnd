/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Addbtn from "./Buttons/Addbtn";
import { addTodo } from "../redux/slice/registeredTodo";
import { useDispatch, useSelector } from "react-redux";

const AddTask = () => {
  const [todo, setTodo] = useState("");
  const registeredTasks = useSelector((state) => state.registeredTodo);
  const dispatch = useDispatch();

  function handleTodoChange({ target }) {
    setTodo(() => {
      return target.value;
    });
    // console.log(todo);
  }

  function handleAddTodo(e) {
    e.preventDefault();
    if (todo.trim()) {
      // console.log(todo);

      dispatch(addTodo(todo));
      // console.log(registeredTasks);

      setTodo("");
    }
  }

  return (
    <div className="mt-5 flex justify-between items-end gap-4">
      <input
        onChange={handleTodoChange}
        value={todo}
        type="text"
        placeholder="Place your AddTask here..."
        className="AddTask bg-transparent text-[20px] p-1 flex items-center grow text-black border-2 border-black rounded-lg min-w-[90%] max-md:min-w-[50%] max-sm:min-w-[50%]"
      />

      <div className="btns flex gap-2">
        <Addbtn onclick={handleAddTodo} />
        {/* <Removebtn /> */}
      </div>
    </div>
  );
};

export default AddTask;
