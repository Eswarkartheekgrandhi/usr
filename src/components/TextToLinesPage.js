import React, { useState, useEffect } from "react";
import TopNavBar from "./topNavBar";
import "../styles/TextToLinesPage.css";
// import EditIcon from "@mui/icons-material/Edit";
// import SaveIcon from "@mui/icons-material/Save";
import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete"; // Import the Delete icon
import { BASE_URL } from './config.js';

function TextToLinesPage() {
  const [editableGroups, setEditableGroups] = useState({});
  const [responseSentences, setResponseSentences] = useState([]);

  useEffect(() => {
    async function fetchSimplifiedSentences() {
      try {
        const token = localStorage.getItem('token'); // Get token from localStorage
        if (!token) {
          console.error('Token not found in localStorage');
          return;
        }

        const response = await fetch(BASE_URL + '/sentenceSimplifier/getSimplifiedSentences', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': token, // Use the retrieved token from localStorage
          },
          body: JSON.stringify({ uploadID: "10007" })
        });

        if (response.ok) {
          const data = await response.json();
          // Group sentences based on the first character of sentenceID
          const groupedSentences = data.data.reduce((groups, sentence) => {
            const firstChar = sentence.sentenceID.charAt(0);
            if (!groups[firstChar]) {
              groups[firstChar] = [];
            }
            groups[firstChar].push(sentence);
            return groups;
          }, {});
          setResponseSentences(groupedSentences);
        } else {
          console.error('Failed to fetch simplified sentences');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }


    fetchSimplifiedSentences();
  }, []);

  const toggleEditMode = (groupKey) => {
    setEditableGroups((prevEditableGroups) => ({
      ...prevEditableGroups,
      [groupKey]: !prevEditableGroups[groupKey],
    }));
  };
  
  const handleAddSentence = (groupKey, sentenceIndex) => {
    const groupSentences = responseSentences[groupKey];
    const newSentence = { sentenceID: "", sentence: "", editable: true };
  
    const updatedSentences = [...groupSentences];
    updatedSentences.splice(sentenceIndex + 1, 0, newSentence);
    updateSentenceIDs(groupKey, updatedSentences);
  };
  
  const handleDeleteSentence = (groupKey, sentenceIndex) => {
    const groupSentences = responseSentences[groupKey];
    const updatedSentences = groupSentences.filter((_, index) => index !== sentenceIndex);
    updateSentenceIDs(groupKey, updatedSentences);
  };
  
  const updateSentenceIDs = (groupKey, sentences) => {
    const updatedSentences = sentences.map((sentence, index) => ({
      ...sentence,
      sentenceID: generateSentenceID(groupKey, index),
    }));
  
    setResponseSentences((prevResponseSentences) => ({
      ...prevResponseSentences,
      [groupKey]: updatedSentences,
    }));
  };
  
  const generateSentenceID = (groupKey, index) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const idPart = alphabet[index % alphabet.length];
    return groupKey + idPart;
  };

  const handleSaveChanges = () => {
    console.log('Edited Sentences:', responseSentences);
    // Save the updated sentences to the server
  };

  return (
    <div className="App">
      <div className="Lines">
        {Object.keys(responseSentences).map((groupKey) => {
          const groupSentences = responseSentences[groupKey];
          const groupEditable = editableGroups[groupKey];

          return (
            <div key={groupKey} className="group-container">
              <hr style={{ backgroundColor: '#063d65', height: '2px', border: 'none' }} />
              <table className="tabletext">
                {groupSentences.map((sentence, sentenceIndex) => (
                  <React.Fragment key={sentence.sentenceID}>
                    <tr className="table-row">
                      <td className="sentence-column">
                        <div className="sentence-info" style={{ display: 'flex', alignItems: 'center', height: '20px' }}>
                          <span className="sentence-id" style={{ width: '100px' }}>{sentence.sentenceID}</span>
                          <span className="sentence-text">
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                              {groupEditable && (
                                <span
                                  className="icon"
                                  style={{ marginRight: '5px', cursor: 'pointer' }}
                                  onClick={() => handleDeleteSentence(groupKey, sentenceIndex)}
                                >
                                  <DeleteIcon />
                                </span>
                              )}
                              {groupEditable && (
                                <span
                                  className="icon"
                                  style={{ marginRight: '5px', cursor: 'pointer' }}
                                  onClick={() => handleAddSentence(groupKey, sentenceIndex)}
                                >
                                  <AddIcon />
                                </span>
                              )}
                              {groupEditable ? (
                                <input
                                  type="text"
                                  className="editable-content"
                                  value={sentence.sentence}
                                  onChange={(event) => {
                                    const newValue = event.target.value;
                                    setResponseSentences((prevResponseSentences) => ({
                                      ...prevResponseSentences,
                                      [groupKey]: prevResponseSentences[groupKey].map((s, idx) => {
                                        if (idx === sentenceIndex) {
                                          return {
                                            ...s,
                                            sentence: newValue,
                                          };
                                        }
                                        return s;
                                      }),
                                    }));
                                  }}
                                />
                              ) : (
                                <p dangerouslySetInnerHTML={{ __html: sentence.sentence }} />
                              )}
                            </div>
                          </span>
                        </div>
                      </td>
                      {sentenceIndex === 0 && (
                        <td className="button-cell align-right" rowSpan={groupSentences.length}>
                          {groupEditable ? (
                            <button
                              onClick={() => toggleEditMode(groupKey)}
                              className={`editable ${groupEditable ? 'active' : ''}`}
                            >
                              Save
                            </button>
                          ) : (
                            <button
                              onClick={() => toggleEditMode(groupKey)}
                              className={`editable ${groupEditable ? 'active' : ''}`}
                            >
                              Edit
                            </button>
                          )}
                        </td>
                      )}
                    </tr>
                  </React.Fragment>
                ))}
              </table>
            </div>
          );
        })}
      </div>
      <div className="Usr-button">
        {Object.values(editableGroups).includes(true) && (
          <button onClick={handleSaveChanges}>Save Changes</button>
        )}
      </div>
    </div>
  );
}

export default TextToLinesPage;
