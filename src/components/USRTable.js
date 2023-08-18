import React, { useState } from "react";
import TopNavBar from "./topNavBar";
import "../styles/USRTablepage.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function USRTable() {
  const [sentences, setSentences] = useState([
    "what is your footer question?",
    "what is your footer question?",
    "what is your footer question?",
    "what is your footer question?",
    "what is your footer question?",
    "what is your footer question?",
    "what is your footer question?",
    "what is your footer question?",
    "what is your footer question?",
    "what is your footer question?",
    "what is your footer questionbdcksbdkbskdbksbdkbkds?",
    "what is your footer question?",
    "what is your footer question?",
    "what is your footer question?",
    "what is your footer question?",
    "what is your footer question?",
    "what is your footer question?",
    "what is your footer question?",
    "what is your footer question?",
  ]);

  return (
    <div>
      <TopNavBar />
      <div className="ba">
        <button>Back</button>
      </div>
      <div className="box-top">
        <h3 className="sentence">Sentences</h3>
        <div className="contain">
          {sentences.map((sentence, index) => (
            <div className="content" key={index}>
              <a href="#">{sentence}</a>
              <span className="arrow">
                <KeyboardArrowRightIcon />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default USRTable;
