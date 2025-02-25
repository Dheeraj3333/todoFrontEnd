import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDate } from "../../redux/slice/taskDate";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(
    currentDate.toISOString().split("T")[0].slice(-2)
  ); // Store only one selected day

  const dispatch = useDispatch();

  //   console.log(currentDate.toISOString().split("T").slice(-2));

  // Get number of days in a month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Handle previous month
  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
    setSelectedDay(null); // Reset selected day when changing months
  };

  // Handle next month
  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
    setSelectedDay(null); // Reset selected day when changing months
  };

  // Handle day click (Only one selected at a time)
  const selectDay = (day) => {
    setSelectedDay(day);

    const formattedDate = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    dispatch(setDate(formattedDate));
  };

  // Render calendar days
  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = getDaysInMonth(year, month);

    let days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = parseInt(selectedDay) === day; // Check if this day is selected
      days.push(
        <div
          key={day}
          onClick={() => selectDay(day)}
          className={`w-8 h-8 cursor-pointer flex items-center justify-center border rounded-md shadow-lg transition-all ${
            isSelected ? "bg-green-600 text-white" : "bg-white"
          }`}
        >
          {day}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-7 gap-[8px] max-w-[300px] min-w-[280px]">
        {days}
      </div>
    );
  };

  return (
    <div className="p-2 py-4 text-black bg-blue-100 rounded-lg max-w-[300px] min-w-[280px] mt-2">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={prevMonth}
          className="px-4 py-2 bg-green-600 text-white rounded-md"
        >
          Prev
        </button>
        <h2 className="text-xl font-bold">
          {currentDate.toLocaleString("default", { month: "short" })}{" "}
          {currentDate.getFullYear()}
        </h2>
        <button
          onClick={nextMonth}
          className="px-4 py-2 bg-green-600 text-white rounded-md"
        >
          Next
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, idx) => (
          <div
            key={idx}
            className="text-center font-bold"
          >
            {day}
          </div>
        ))}
      </div>

      {renderCalendar()}
    </div>
  );
}
