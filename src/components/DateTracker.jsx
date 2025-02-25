/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useState } from "react";

const DateTracker = ({ date, month, fullDate, onclick }) => {
  return (
    <div onClick={onclick} className={`max-w-14 box-border bg-green-600 `}>
      <div className={`date text-[20px] max-small:text-[15px] font-extrabold text-center px-2 `}>
        {date}
      </div>
      <div className="month text-[20px] max-small:text-[15px] font-extrabold text-center p-2 bg-white text-green-600">
        {month}
      </div>
    </div>
  );
};

DateTracker.propTypes = {
  date: PropTypes.number.isRequired,
  month: PropTypes.string.isRequired,
};

export default DateTracker;
