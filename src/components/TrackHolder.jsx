/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import DateTracker from "./DateTracker";
import { setDate } from "../redux/slice/taskDate";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Calendar from "./Calender/Calender";

let currentDate = new Date();
currentDate = currentDate.toISOString().split("T")[0];
// let globalDate = useSelector((state)=>state.registeredTodo)

function getLastFiveDates() {
  let prevDates = [];

  for (let x = 0; x < 5; x++) {
    let date = new Date();
    prevDates.push({
      date: currentDate.slice(-2) - x,
      month: date.toLocaleString("default", { month: "short" }),
      fullDate: currentDate.slice(0, -2) + (currentDate.slice(-2) - x),
    });
  }
  return prevDates.reverse();
}

const TrackHolder = () => {
  const dispatch = useDispatch();
  const [selectedDay, setSelectedDay] = useState(currentDate);
  const [isCalender, setIsCalender] = useState(false);

  return (
    <div>
      <h1 className="text-white text-center mt-[20px] text-6xl font-extrabold">
        Todo List...
      </h1>

      <div className="track-holder flex items-center gap-4 max-small:gap-2 mt-[20px]">
        {/* // show calender btn */}
        <div className="seeMore">
          <SeeMore
            onclick={() => {
              setIsCalender((prev) => !prev);
            }}
          />
          <div
            className={`${
              isCalender ? "block" : "hidden"
            } fixed z-10 top-0 left-0 flex flex-col items-center justify-center w-full h-screen bg-[#6464649a]`}
          >
            <Calendar />

            <div className="w-[300px] flex gap-[20px]">
              <button
              onClick={()=>{setIsCalender(false)
                dispatch(setDate(currentDate))
              }}
                type="button"
                className="bg-red-500 rounded-md mt-4 w-[140px] max-md-py-2 py-1 text-[25px] max-md-font-bold"
              >
                Cancel
              </button>
              <button
              onClick={()=>{setIsCalender(false)}}
                type="button"
                className="bg-green-600 rounded-md mt-4 w-[140px] max-md-py-2 py-1 text-[25px] max-md-font-bold"
              >
                Done
              </button>
            </div>
          </div>
        </div>

        {getLastFiveDates().map((track, idx) => (
          <div
            className={`cursor-pointer relative transition-all duration-100 overflow-hidden border-2  rounded-[12px]  ${
              selectedDay == track.fullDate
                ? " border-green-600 scale-110"
                : "border-transparent"
            } hover:scale-110`}
            key={idx}
            onClick={() => {
              setSelectedDay(track.fullDate);
            }}
          >
            <DateTracker
              onclick={() => {
                dispatch(setDate(track.fullDate));
              }}
              fullDate={track.fullDate}
              date={track.date}
              month={track.month}
            />
          </div>
        ))}
      </div>

      {/* Calender */}
    </div>
  );
};

function SeeMore({ onclick }) {
  return (
    <div
      onClick={onclick}
      className="text-[20px] max-small:text-[15px] relative z-20 cursor-pointer rounded-[12px] self-stretch font-extrabold text-center p-[6px] bg-white text-green-600 flex flex-col items-center hover:scale-110 transition-all duration-100"
    >
      More
      <AddCircleIcon fontSize="large" />
    </div>
  );
}

export default TrackHolder;
