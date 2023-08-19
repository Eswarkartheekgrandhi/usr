import React, { useState, useMemo } from 'react';
import TopNavBar from "./topNavBar.js";
import "../styles/USRtablenew.css";


export default function App() {
  return (
    <>
      <TopNavBar />
      <br />
      <br />
      <div className='USRnew-table-box'>
        <div style={{display:"flex",flexDirection:"row"}}>
            <div className='USRnew-top-box'>Concept</div>
            <div className='USRnew-top-box'>Concept</div>
            <div className='USRnew-top-box'>Concept</div>
            <div className='USRnew-top-box'>Concept</div>
            <div className='USRnew-top-box'>Concept</div>
            <div className='USRnew-top-box'>Concept</div>
            <div className='USRnew-top-box'>Concept</div>
            <div className='USRnew-top-box'>Concept</div>
        </div>
        <div style={{display:"flex",flexDirection:"row"}}>
            <div className='USRnew-top-box'>Concept</div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
        </div>
        <div style={{display:"flex",flexDirection:"row"}}>
            <div className='USRnew-top-box'>Index</div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
        </div>
        <div style={{display:"flex",flexDirection:"row"}}>
            <div className='USRnew-top-box'>Sem. Cat</div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
        </div>
        <div style={{display:"flex",flexDirection:"row"}}>
            <div className='USRnew-top-box'>G.N.P</div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
        </div>
        <div style={{display:"flex",flexDirection:"row"}}>
            <div className='USRnew-top-box'>Dep-Rel</div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
        </div>
        <div style={{display:"flex",flexDirection:"row"}}>
            <div className='USRnew-top-box'>Discourse</div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
        </div>
        <div style={{display:"flex",flexDirection:"row"}}>
            <div className='USRnew-top-box'>Speaker view</div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
        </div>
        <div style={{display:"flex",flexDirection:"row"}}>
            <div className='USRnew-top-box'>Scope</div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
        </div>
        <div style={{display:"flex",flexDirection:"row"}}>
            <div className='USRnew-top-box'>Sentence Type</div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
        </div>
        <div style={{display:"flex",flexDirection:"row"}}>
            <div className='USRnew-top-box'>Construction</div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
            <div className='USRnew-top-box-edit'></div>
        </div>
      </div>
    </>
  );
}