import React, { useState, useMemo } from 'react';
import TopNavBar from "./topNavBar.js";
import "../styles/USRtablenew.css";
import USRTablePage from './USRTable.js';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import icon from "../images/white.png";
import USRTablecontent from './USRTableComponent.js';



export default function App() {
    

    return (
        <>
            <TopNavBar />
            <br />
            <br />
            <USRTablePage />
            <br />
            <br />
            <USRTablecontent />
            <br />
            <br />
            <br />
        </>
    );
}