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
<<<<<<< HEAD
    <div className="top">
      <TopNavBar />
      <div className="ba">
        <button>Back</button>
      </div>
=======
    <div >
      <div className="ba">
        <button>Back</button>
      </div>
      {/* <div className="box"></div> */}
>>>>>>> def880e1f1cb6fc4bd85901ddf21e0dfbbda6494
      <div className="box-top">
        <h3 className="sentence">Sentences</h3>
        <div className="contain">
          {sentences.map((sentence, index) => (
            <div className="content" key={index}>
              <a href="#" style={{color:"black"}}>{sentence}</a>
              <span className="arrow">
                <KeyboardArrowRightIcon />
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="box-middle">
        <h3 className="Discourse">Discourse</h3>
        <p className="Discourse-data">
          Lorem ipsum dolor sit amet consectetur. Scelerisque gravida bibendum
          in sed diam quis nullam. Tempor elementum morbi viverra lectus integer
          non id. Nulla turpis sit a adipiscing sit feugiat neque. Quam tellus a
          vitae pulvinar quis. Leo sed porta urna vitae congue molestie
          ullamcorper in. Donec suspendisse ultrices nunc ac. Maecenas ac velit
          in auctor. Duis ullamcorper tempor phasellus turpis euismod accumsan
          tincidunt tortor eleifend. Hendrerit pulvinar purus sed nunc duis.
        </p>
      </div>
    </div>
  );
}

export default USRTable;
