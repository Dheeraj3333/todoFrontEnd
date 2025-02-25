/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import AddTask from "./AddTask";
import Resetbtn from "./Buttons/Resetbtn";
import Savebtn from "./Buttons/SaveBtn";
import RegisterdTask from "./RegisterdTask";
import { resetTodos } from "../redux/slice/registeredTodo";
import { confirm } from "../redux/slice/confirmTask";
import SaveToDB from "./Buttons/SaveToDB";
import { uploadTodo } from "../redux/slice/registeredTodo";
import { useEffect } from "react";

const CurrentDayTask = () => {
  const { tasks, createdOn } = useSelector((state) => state.registeredTodo);
  const isConfirm = useSelector((state) => state.confirmTask);
  // const RegisterdTask = useSelector((state)=>state.registeredTodo)

  const dispatch = useDispatch();

  return (
    <>
      <div className="all-task">
        <RegisterdTask />
        {!isConfirm && <AddTask />}
      </div>
      <div className="flex gap-4 flex-wrap mt-6">
        {(() => {
          if (tasks.length > 0) {
            return (
              <>
                {!isConfirm ? (
                  <Resetbtn
                    onclick={() => {
                      dispatch(resetTodos());
                    }}
                  />
                ) : (
                  <SaveToDB
                    onclick={() => {
                      dispatch(uploadTodo({ tasks, createdOn }));
                      console.log("Uploading...");
                    }}
                  />
                )}

                <Savebtn
                  onclick={() => {
                    dispatch(confirm());
                  }}
                />
              </>
            );
          }
        })()}
      </div>
    </>
  );
};

export default CurrentDayTask;
