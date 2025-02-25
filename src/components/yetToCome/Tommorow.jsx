
import { PropTypes } from "prop-types";

const Tommorow = ({ message }) => {
  return (
    <div className=" flex justify-center items-center h-[50vh]">
      <p className="text-[30px] font-bold text-black text-center">{message}</p>
    </div>
  );
};

Tommorow.propTypes = {
    message:PropTypes.string.isRequired,
}

export default Tommorow;
