import React, { useState, useEffect } from "react";
import TopNavBar from "./topNavBar";
import "../styles/USRTablepage.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { BASE_URL } from "./config";

function USRTable() {
  const [discourseData, setDiscourseData] = useState({
    discourseContent: "",
    discourseName: ""
  });

  const [sentences, setSentences] = useState([]);

  const fetchDiscourseData = async () => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      console.error('Token not found in localStorage');
      return;
    }
    
    const requestBody = {
      uploadID: "10016"
    };

    try {
      const response = await fetch(BASE_URL+"/discourse/getDiscourseData", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token,
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error('Failed to fetch discourse data');
      }

      const data = await response.json();
      setDiscourseData(data[0]);

      // Split the discourse content into sentences and set them in state
      // const sentenceArray = data[0].discourseContent.split('।');
      const delimiters = ['।', '.', '|']; // Add more delimiters as needed
      const combinedDelimiters = delimiters.map(delimiter => `\\${delimiter}`).join('|');
      const sentenceArray = data[0].discourseContent.split(new RegExp(combinedDelimiters));
      setSentences(sentenceArray);
    } catch (error) {
      console.error('Error fetching discourse data:', error);
    }
  };

  useEffect(() => {
    fetchDiscourseData();
  }, []);

  return (
    <div className="top">
      <div className="ba">
        <button>Back</button>
      </div>
      <div className="box-middle">
      {/* <h3>Discourse</h3>
        <p className="Discourse">Discourse Name: {discourseData.discourseName}</p>
        <h3>Content</h3>
        <p className="Discourse-data">{discourseData.discourseContent}</p> */}
        <h3 className="Discourse">{discourseData.discourseName}</h3>
        <p className="Discourse-data">{discourseData.discourseContent}</p>
      </div>
      <div className="box-top">
        <h3 className="sentence">Sentences</h3>
        <div className="contain">
          {sentences.map((sentence, index) => (
            <div className="content" key={index}>
              <a href="#" style={{ color: "black" }}>
                {sentence}
              </a>
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
