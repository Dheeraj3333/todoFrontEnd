/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";

const Savebtn = ({ onclick }) => {
  const isConfirm = useSelector((state) => state.confirmTask);

  return (
    <button
      onClick={onclick}
      className="text-white bg-green-600 p-2 px-4 rounded text-xl"
    >
      {!isConfirm ? "Confirm All Tasks" : "Edit Again"}
    </button>
  );
};

export default Savebtn;
