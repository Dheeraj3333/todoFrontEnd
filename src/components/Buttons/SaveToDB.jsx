import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ReplayIcon from "@mui/icons-material/Replay";
import { useSelector } from "react-redux";

const SaveToDB = ({ onclick }) => {
  const { isSent } = useSelector((state) => state.registeredTodo.details);

  return (
    <button
      onClick={onclick}
      className="text-white bg-green-600 p-2 px-4 rounded text-xl"
    >
      <span>
        {isSent ? "Update in DB" : "Upload To DB"}
        {isSent ? (
          <ReplayIcon style={{ marginInline: "10px" }} fontSize="large" />
        ) : (
          <CloudUploadIcon style={{ marginInline: "10px" }} fontSize="large" />
        )}
      </span>
    </button>
  );
};

export default SaveToDB;
