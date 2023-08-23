import React from "react";
import "../styles/DeleteMsgPopup.css";

function DeleteMsgPopup({ onClose }) {
  return (
    <div className="popup-box">
      <span className="close-icon" onClick={onClose}>
        &times;
      </span>
      <div className="box">
        <p className="head">Are you sure you want to delete this file?</p>
        <div className="buttons">
          <button
            className="cancel"
            style={{
              width: "50%",
              backgroundColor: "#C9C9C9",
              color: "#FCFCFC",
              border: "none",
              borderRadius: "8px",
            }}
          >
            Cancel
          </button>
          <button
            className="delete"
            style={{
              width: "50%",
              backgroundColor: "#063D65",
              color: "#FCFCFC",
              border: "none",
              borderRadius: "8px",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteMsgPopup;
