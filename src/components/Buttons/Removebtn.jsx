/* eslint-disable react/prop-types */
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Removebtn = ({ onclick }) => {
  return (
    <button
      onClick={onclick}
      className="text-white bg-red-600 p-1 rounded text-xl"
    >
      <DeleteForeverIcon fontSize="large" />
    </button>
  );
};

export default Removebtn;
