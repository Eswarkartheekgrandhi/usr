import React, { useState, useMemo } from 'react';
import Pagination from './PageDiv.js';
import data from './mock-data.json';
import '../styles/pagination.scss';
import TopNavBar from "./topNavBar.js";
import "../styles/table.css";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";  
import uploadImage from "../images/upload.png";

let PageSize = 10;

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [visible, setVisible] = useState(false);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const footerContent = (
    <div>
        <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
        <Button label="Yes" icon="pi pi-check" autoFocus />
    </div>
);

  return (
    <>
      <TopNavBar />
      <br />
      <br />

      <div className='table-add-tab'>
        <div style={{ flex: "50%" }}>
          <div className='table-button' onClick={() => setVisible(true)}>Add USR</div>
          <Dialog header="File upload" visible={visible} style={{ width: '50vw',height:'60vh' }} onHide={() => setVisible(false)} >
            <div className='table-popup'>
              <div className='table-popup-card'>
                Raw File
                <div className='table-popup-content-card'>
                    <img src={uploadImage} alt="upload" style={{width:'6vw',height:'6vw'}}/>
                    <div style={{fontSize:".8em",fontWeight:"500",marginTop:"1vh"}}>Drag and drop File</div>
                    <div style={{fontSize:".7em",fontWeight:"450",marginTop:"1vh",color:"grey"}}>Or</div>
                    <div className='table-popup-button'>Browse this computer</div>
                </div>
              </div>
              <div className='table-popup-card'>
                USR File
                <div className='table-popup-content-card'>
                    <img src={uploadImage} alt="upload" style={{width:'6vw',height:'6vw'}}/>
                    <div style={{fontSize:".8em",fontWeight:"500",marginTop:"1vh"}}>Drag and drop File</div>
                    <div style={{fontSize:".7em",fontWeight:"450",marginTop:"1vh",color:"grey"}}>Or</div>
                    <div className='table-popup-button'>Browse this computer</div>
                </div>
              </div>  
            </div>
          </Dialog>
        </div>
        <div style={{ flex: "50%" }}>
          <div style={{ display: "flex", justifyContent: "right", alignItems: "center" }}>
            <div className='table-button'>Export</div>
            <div className='table-button'>Delete</div>
          </div>
        </div>
      </div>
      <div className='table-data'>
        <div className='table-head' style={{ color: "#A6A6A6", backgroundColor: "#d6e6f2" }}>
          <div style={{ flex: "25%", textAlign: "left", paddingLeft: "1vw" }}>Discourse Name</div>
          <div style={{ flex: "15%", textAlign: "center" }}>Total USR</div>
          <div style={{ flex: "15%", textAlign: "center" }}>Total Validate</div>
          <div style={{ flex: "15%", textAlign: "center" }}>Pending</div>
          <div style={{ flex: "15%", textAlign: "center" }}>Status</div>
          <div style={{ flex: "15%", textAlign: "center" }}>Action</div>
        </div>
        {currentTableData.map(item => {
          return (
            <div className='table-head' style={{ color: "black" }}>
              <div style={{ flex: "25%", textAlign: "left", paddingLeft: "1vw" }}>{item.id}</div>
              <div style={{ flex: "15%", textAlign: "center" }}>{item.first_name}</div>
              <div style={{ flex: "15%", textAlign: "center" }}>{item.last_name}</div>
              <div style={{ flex: "15%", textAlign: "center" }}>{item.email}</div>
              <div style={{ flex: "15%", textAlign: "center", color:"red"}}>{item.phone}</div>
              <div style={{ flex: "15%", textAlign: "center" }}>{item.first_name}</div>
            </div>
          );
        })}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
}