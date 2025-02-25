/* eslint-disable react/prop-types */
const Resetbtn = ({ onclick }) => {
  return (
    <button
      onClick={onclick}
      className="text-white bg-red-600 p-2 px-4 rounded text-xl"
    >
      Reset
    </button>
  );
};

export default Resetbtn;
