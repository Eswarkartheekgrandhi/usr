import React from "react";
import "../styles/USRTable.css";
import TopNavBar from "./topNavBar.js";
import "../styles/topNavBar.css";

function USRTablePage() {
  return (
    <div className="App">
      <TopNavBar />
      <div className="ba">
        <button>Back</button>
      </div>
      <div className="container">
        <div className="box_left">
          <h3>Sentences</h3>
          <div className="content">
            <a href="#">What is your header question?</a>
          </div>
          <div className="content">
            <a href="#">What is your body question?</a>
          </div>
          <div className="content">
            <a href="#">What is your body question?</a>
          </div>
          <div className="content">
            <a href="#">What is your footer question?</a>
          </div>
          <div className="content">
            <a href="#">What is your header question?</a>
          </div>
          <div className="content">
            <a href="#">What is your body question?</a>
          </div>
          <div className="content">
            <a href="#">What is your body question?</a>
          </div>
          <div className="content">
            <a href="#">What is your footer question?</a>
          </div>
          <div className="content">
            <a href="#">What is your header question?</a>
          </div>
          <div className="content">
            <a href="#">What is your body question?</a>
          </div>
          <div className="content">
            <a href="#">What is your body question?</a>
          </div>
          <div className="content">
            <a href="#">What is your footer question?</a>
          </div>
        </div>
        <div className="box_right">
          <h3>USR table</h3>
          <div className="content_right"></div>
        </div>
      </div>
      <button className="next">Next</button>
    </div>
  );
}

export default USRTablePage;
