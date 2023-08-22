import React, { useState, useMemo } from "react";
import Pagination from "./PageDiv.js";
import data from "./mock-data.json";
import "../styles/pagination.scss";
import TopNavBar from "./topNavBar.js";
import "../styles/table.css";
import { Dialog } from "primereact/dialog";
// import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import uploadImage from "../images/upload.png";
import Modal from "react-modal";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import icon from "../images/Group.png";
import DeleteMsgPopup from "./DeleteMsgPopup.js";

let PageSize = 10;

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [visible, setVisible] = useState(false);
  const [exportVisible, setExportVisible] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => {
    setShowPopup(true);
  };
  const closePopup = () => {
    setShowPopup(false);
  };

  const footerContent = (
    <div>
      <Button
        label="No"
        icon="pi pi-times"
        onClick={() => setVisible(false)}
        className="p-button-text"
      />
      <Button label="Yes" icon="pi pi-check" autoFocus />
    </div>
  );

  const footerContentExport = (
    <div>
      <Button
        label="No"
        icon="pi pi-times"
        onClick={() => setExportVisible(false)}
        className="p-button-text"
      />
      <Button label="Yes" icon="pi pi-check" autoFocus />
    </div>
  );

  return (
    <>
      <TopNavBar />
      <br />
      <br />

      <div className="table-add-tab">
        <div style={{ flex: "50%" }}>
          <div className="table-button" onClick={() => setVisible(true)}>
            Add USR
          </div>
          <Dialog
            header="File upload"
            visible={visible}
            style={{ width: "50vw", height: "60vh" }}
            onHide={() => setVisible(false)}
            draggable={false}
          >
            <div className="table-popup">
              <div className="table-popup-card">
                Raw File
                <div className="table-popup-content-card">
                  <img
                    src={uploadImage}
                    alt="upload"
                    style={{ width: "6vw", height: "6vw" }}
                  />
                  <div
                    style={{
                      fontSize: ".8em",
                      fontWeight: "500",
                      marginTop: "1vh",
                    }}
                  >
                    Drag and drop File
                  </div>
                  <div
                    style={{
                      fontSize: ".7em",
                      fontWeight: "450",
                      marginTop: "1vh",
                      color: "grey",
                    }}
                  >
                    Or
                  </div>
                  <div className="table-popup-button">Browse this computer</div>
                </div>
              </div>
              <div className="table-popup-card">
                USR File
                <div className="table-popup-content-card">
                  <img
                    src={uploadImage}
                    alt="upload"
                    style={{ width: "6vw", height: "6vw" }}
                  />
                  <div
                    style={{
                      fontSize: ".8em",
                      fontWeight: "500",
                      marginTop: "1vh",
                    }}
                  >
                    Drag and drop File
                  </div>
                  <div
                    style={{
                      fontSize: ".7em",
                      fontWeight: "450",
                      marginTop: "1vh",
                      color: "grey",
                    }}
                  >
                    Or
                  </div>
                  <div className="table-popup-button">Browse this computer</div>
                </div>
              </div>
            </div>
          </Dialog>
        </div>
        <div style={{ flex: "50%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
            }}
          >
            <div
              className="table-button"
              onClick={() => setExportVisible(true)}
            >
              Export
            </div>
            <Dialog
              header="File upload"
              visible={exportVisible}
              style={{ width: "50vw", height: "35vh" }}
              onHide={() => setExportVisible(false)}
              draggable={false}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ color: "#242424" }}>
                  Please select correct option
                </div>
                <div style={{ color: "#242424" }}>
                  HDFJVI937898547BFEJBFEKKHK8
                </div>
              </div>
              <br />

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItem: "center",
                  justifyContent: "center",
                }}
              >
                <div className="table-popup-export-option">CSV</div>
                <div className="table-popup-export-option">
                  {/* select language */}
                  <select
                    class="form-select"
                    id="languages"
                    name="languages"
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "white",
                    }}
                  >
                    <option>select language</option>
                    <option value="Hindi" style={{ color: "black" }}>
                      Hindi
                    </option>
                    <option value="Punjabi" style={{ color: "black" }}>
                      Punjabi
                    </option>
                    <option value="Telugu" style={{ color: "black" }}>
                      Telugu
                    </option>
                  </select>
                </div>
              </div>
            </Dialog>
            <div className="table-button" onClick={openPopup}>
              Delete
            </div>
            {showPopup && <DeleteMsgPopup onClose={closePopup} />}
          </div>
        </div>
      </div>
      <div className="table-data">
        <div
          className="table-head"
          style={{ color: "#A6A6A6", backgroundColor: "#d6e6f2" }}
        >
          <div style={{ flex: "25%", textAlign: "left", paddingLeft: "1vw" }}>
            Discourse Name
          </div>
          <div style={{ flex: "15%", textAlign: "center" }}>Total USR</div>
          <div style={{ flex: "15%", textAlign: "center" }}>Total Validate</div>
          <div style={{ flex: "15%", textAlign: "center" }}>Pending</div>
          <div style={{ flex: "15%", textAlign: "center" }}>Status</div>
          <div style={{ flex: "15%", textAlign: "center" }}>Action</div>
        </div>
        {currentTableData.map((item) => {
          return (
            <div className="table-head" style={{ color: "black" }}>
              <div
                style={{ flex: "25%", textAlign: "left", paddingLeft: "1vw" }}
              >
                {item.id}
              </div>
              <div style={{ flex: "15%", textAlign: "center" }}>
                {item.first_name}
              </div>
              <div style={{ flex: "15%", textAlign: "center" }}>
                {item.last_name}
              </div>
              <div style={{ flex: "15%", textAlign: "center" }}>
                {item.email}
              </div>
              <div style={{ flex: "15%", textAlign: "center", color: "red" }}>
                {item.phone}
              </div>
              <div
                style={{
                  flex: "15%",
                  boxShadow: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  src={icon}
                  style={{ maxWidth: "2.5%", height: "auto" }}
                />
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Modify</MenuItem>
                  <MenuItem onClick={handleClose}>View</MenuItem>
                  <MenuItem onClick={handleClose}>Add</MenuItem>
                </Menu>
              </div>
              {/* <div style={{ flex: "15%", textAlign: "center" }}>{item.first_name}</div> */}
            </div>
          );
        })}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}
