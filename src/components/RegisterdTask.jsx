// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../redux/slice/registeredTodo";
import Removebtn from "./Buttons/Removebtn";
import Donebtn from "./Buttons/Donebtn";
import { checkTodo } from "../redux/slice/registeredTodo";
import { getCurrentDayTodos } from "../redux/slice/registeredTodo";
import { useEffect } from "react";

const RegisterdTask = () => {
  const allData = useSelector((state) => state.registeredTodo.tasks);
  // const { status } = useSelector((state) => state.registeredTodo.details);
  const confirmAllTask = useSelector((state) => state.confirmTask);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(getCurrentDayTodos());
    })();
  }, [dispatch]);

  return (
    <div className="all-registered-tasks">
      {allData?.map((obj, idx) => (
        <div key={idx} className="mt-5 flex justify-between gap-4 items-end">
          <p className="registeredTask bg-black text-[25px] max-md:text-[20px] h-full grow px-2 py-1 flex items-center font-bold text-[#fff] shadow-[0_0_10px_#0000001a] rounded min-w-[90%] max-md:min-w-[50%] max-sm:min-w-[50%]">
            {obj.task}
          </p>
          <div className="btns flex gap-2">
            {confirmAllTask ? (
              <Donebtn
                task={obj.task}
                onclick={() => {
                  dispatch(checkTodo(obj.task));
                }}
              />
            ) : (
              <Removebtn
                onclick={() => {
                  dispatch(removeTodo(idx));
                }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RegisterdTask;
