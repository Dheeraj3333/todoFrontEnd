/* eslint-disable react/prop-types */

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const PreviousTask = ({ data }) => {
  console.log(data);

  return (
    <div className="flex gap-4 flex-col mt-6">
      {data.tasks.map((obj, key) => (
        <p
          key={key}
          className="AddTask bg-black text-[25px] max-md:text-[20px] px-2 py-1 flex items-center font-bold text-[#fff] shadow-[0_0_10px_#0000001a] rounded min-w-[90%] mb-4 relative"
        >
          {obj.task}
          <span className="absolute left-[-15px] top-[-20px] bg-black rounded-full flex justify-center items-center">
            {obj.isCompleted ? (
              <CheckCircleIcon fontSize="large" style={{ color: "#38a169" }} />
            ) : (
              <CancelIcon style={{ color: "red" }} fontSize="large" />
            )}
          </span>
        </p>
      ))}
    </div>
  );
};

export default PreviousTask;
