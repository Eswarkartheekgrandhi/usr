import React, { useState } from "react";
import TopNavBar from "./topNavBar";
import "../styles/TextToLinesPage.css";
import group from "../images/Group (1).png";
import vector from "../images/Vector (1).png";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

function TextToLinesPage() {
  const initialContent =
    "Lorem ipsum dolor sit amet consectetur. Gravida diam massa sit nulla amet adipiscing elit. Velit aenean porttitor fermentum nunc et fermentum. Eget varius malesuada ullamcorper magna.";

  const [isEditable, setIsEditable] = useState(false);
  const [editModeContentSection1, setEditModeContentSection1] =
    useState(initialContent);
  const [editModeContentSection2, setEditModeContentSection2] =
    useState(initialContent);

  const toggleEditMode = () => {
    setIsEditable(!isEditable);
  };

  const handleEditContentChangeSection1 = (event) => {
    setEditModeContentSection1(event.target.textContent);
  };

  const handleEditContentChangeSection2 = (event) => {
    setEditModeContentSection2(event.target.textContent);
  };

  const handleSaveChanges = () => {
    console.log("Edited Content Section 1:", editModeContentSection1);
    console.log("Edited Content Section 2:", editModeContentSection2);
    toggleEditMode();
  };

  return (
    <div className="App">
      <TopNavBar />
      <a className="Back-button" href="#">
        Back
      </a>
      <div className="top-heading">
        <h4>Text converted to lines</h4>
      </div>
      <div className="Lines">
        <div className="Lines-1">
          <div className="edit-icon" onClick={toggleEditMode}>
            <button onClick={toggleEditMode} className="editable">
              {isEditable ? <SaveIcon /> : <EditIcon />}
            </button>
          </div>
          <div className="Lines-1-left">
            <h4>01</h4>
          </div>
          <div className="Lines-1-right">
            <div className="Lines-1-right-part1">
              <div className="Lines-1-right-part1-left">
                <h4>A</h4>
              </div>
              <div className="Lines-1-right-part1-right">
                {isEditable ? (
                  <p
                    className={isEditable ? "editable-content" : ""}
                    contentEditable={isEditable}
                    onBlur={handleEditContentChangeSection1}
                    dangerouslySetInnerHTML={{
                      __html: editModeContentSection1,
                    }}
                  />
                ) : (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: editModeContentSection1,
                    }}
                  />
                )}
              </div>
            </div>
            <div className="Lines-1-right-part3">
              <div className="Lines-1-right-part1-left">
                <h4>B</h4>
              </div>
              <div className="Lines-1-right-part1-right">
                {isEditable ? (
                  <p
                    className={isEditable ? "editable-content" : ""}
                    contentEditable
                    onBlur={handleEditContentChangeSection2}
                    dangerouslySetInnerHTML={{
                      __html: editModeContentSection2,
                    }}
                  />
                ) : (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: editModeContentSection2,
                    }}
                  />
                )}
                {/* <button onClick={toggleEditMode} className="editable">
                  {isEditable ? <EditIcon /> : <SaveIcon />}
                </button> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="Lines-2"></div> */}
        <div className="Lines-1">
          <div className="Lines-1-left">
            <h4>02</h4>
          </div>
          <div className="Lines-1-right">
            <div className="Lines-1-right-part1">
              <div className="Lines-1-right-part1-left">
                <h4>A</h4>
              </div>
              <div className="Lines-1-right-part1-right">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Gravida diam massa sit
                  nulla amet adipiscing elit. Velit aenean porttitor fermentum
                  nunc et fermentum. Eget varius malesuada ullamcorper magna.
                </p>
              </div>
            </div>
            <div className="Lines-1-center">
              <img src={group} alt="" />
              <img src={vector} alt="" />
              <div className="Lines-1-center-hr"></div>
            </div>
            <div className="Lines-1-right-part3">
              <div className="Lines-1-right-part1-left">
                <h4>B</h4>
              </div>
              <div className="Lines-1-right-part1-right">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Gravida diam massa sit
                  nulla amet adipiscing elit. Velit aenean porttitor fermentum
                  nunc et fermentum. Eget varius malesuada ullamcorper magna.
                </p>
              </div>
            </div>
            <div className="Lines-1-center">
              <img src={group} alt="" />
              <img src={vector} alt="" />
              <div className="Lines-1-center-hr"></div>
            </div>
            <div className="Lines-1-right-part3">
              <div className="Lines-1-right-part1-left">
                <h4>C</h4>
              </div>
              <div className="Lines-1-right-part1-right">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Gravida diam massa sit
                  nulla amet adipiscing elit. Velit aenean porttitor fermentum
                  nunc et fermentum. Eget varius malesuada ullamcorper magna.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="Lines-3"></div> */}
        <div className="Lines-1">
          <div className="Lines-1-left">
            <h4>03</h4>
          </div>
          <div className="Lines-1-right">
            <div className="Lines-1-right-part1">
              <div className="Lines-1-right-part1-left">
                <h4>A</h4>
              </div>
              <div className="Lines-1-right-part1-right">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Gravida diam massa sit
                  nulla amet adipiscing elit. Velit aenean porttitor fermentum
                  nunc et fermentum. Eget varius malesuada ullamcorper magna.
                </p>
              </div>
            </div>
            <div className="Lines-1-center">
              <img src={group} alt="" />
              <img src={vector} alt="" />
              <div className="Lines-1-center-hr"></div>
            </div>
            <div className="Lines-1-right-part3">
              <div className="Lines-1-right-part1-left">
                <h4>B</h4>
              </div>
              <div className="Lines-1-right-part1-right">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Gravida diam massa sit
                  nulla amet adipiscing elit. Velit aenean porttitor fermentum
                  nunc et fermentum. Eget varius malesuada ullamcorper magna.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="Lines-4"></div> */}
      </div>
      <div className="Usr-button">
        <button>Generate USR</button>
      </div>
    </div>
  );
}

export default TextToLinesPage;
