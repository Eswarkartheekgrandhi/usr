import React, { useState, useMemo } from 'react';
import Pagination from './PageDiv.js';
import data from './mock-data.json';
import '../styles/pagination.scss';
import TopNavBar from "./topNavBar.js";
import "../styles/table.css";

let PageSize = 10;

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <TopNavBar />
      <br />
      <br />

      <div className='table-add-tab'>
        <div style={{ flex: "50%" }}>
          <div className='table-button'>Add USR</div>
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