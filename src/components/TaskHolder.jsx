import { useDispatch, useSelector } from "react-redux";
import CurrentDayTask from "./CurrentDayTask";
import Tommorow from "./yetToCome/Tommorow";
import { useEffect, useState } from "react";
import PreviousTask from "./previousTask/PreviousTask";
import { fetchTodos } from "../redux/slice/getTodos";

const TaskHolder = () => {
  let currentDate = new Date();
  currentDate = currentDate.toISOString().split("T")[0];

  const { tasks, status, error } = useSelector((state) => state.getTodo);
  const dispatch = useDispatch();

  const date = useSelector((state) => state.taskDate);
  const [task, setTask] = useState(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTodos());
    }
  }, [dispatch, status]);

  useEffect(() => {
    async function getTodo() {
      try {
        let data = tasks.find((target) => target.createdOn == date);
        setTask(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getTodo();
  }, [date,tasks]);

  function showTasks() {
    if (date === currentDate) {
      return <CurrentDayTask />;
    } else if (error) {
      return <Tommorow message={"Server Down..."} />;
    } else if (date > currentDate) {
      return <Tommorow message={"Yet to come..."} />;
    } else if (date < currentDate) {
      return (
        <>
          {task ? (
            <PreviousTask data={task} />
          ) : (
            <Tommorow message={"No task Was Set On this date..."} />
          )}
        </>
      );
    }
  }

  function showDate() {
    if (date == currentDate) {
      return "Today";
    } else {
      return date;
    }
  }

  return (
    <div className=" mt-[20px] px-[5%] rounded-[12px] bg-white min-h-[50vh] pb-8 pt-4">
      <h2 className="text-[30px] text-[#333] py-2 font-extrabold">
        To-Do {showDate()}
      </h2>
      <hr className="block m-auto h-[1px] bg-[#1212127e] border-none outline-none mb-4" />

      {showTasks()}
    </div>
  );
};

export default TaskHolder;
