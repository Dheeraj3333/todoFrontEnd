/* eslint-disable react/prop-types */
import AddIcon from "@mui/icons-material/Add";
const Addbtn = ({ onclick }) => {
  return (
    <button
      onClick={onclick}
      className="text-white bg-green-600 p-1 rounded text-xl"
    >
      <AddIcon fontSize="large" />
    </button>
  );
};

export default Addbtn;
