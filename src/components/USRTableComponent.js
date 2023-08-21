import React, { useState, useMemo } from 'react';
import TopNavBar from "./topNavBar.js";
import "../styles/USRtablenew.css";
import USRTablePage from './USRTable.js';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import icon from "../images/white.png";



export default function App() {
    const [text, setText] = useState('abc');
    const [visible, setVisible] = useState(false);
    const [exportVisible, setExportVisible] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleInputChange = (event) => {
        setText(event.target.value);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };

    return (
        <>
            <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", paddingBottom: "1vh", fontWeight: "700" }}>USR Table</div>
            <div className='USRnew-table-box'>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className='USRnew-top-box'>
                        <div>Concept</div>
                        
                        <img aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            src={icon}
                            style={{ maxWidth: "2.5%", height: "auto",marginLeft:"4vw" }}
                        />
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Modify</MenuItem>
                            <MenuItem onClick={handleClose}>View</MenuItem>
                            <MenuItem onClick={handleClose}>Add</MenuItem>
                        </Menu>
                    </div>
                    <div className='USRnew-top-box'>
                        <div>Concept</div>
                        
                        <img aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            src={icon}
                            style={{ maxWidth: "2.5%", height: "auto",marginLeft:"4vw" }}
                        />
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Modify</MenuItem>
                            <MenuItem onClick={handleClose}>View</MenuItem>
                            <MenuItem onClick={handleClose}>Add</MenuItem>
                        </Menu>
                    </div>
                    <div className='USRnew-top-box'>
                        <div>Concept</div>
                        
                        <img aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            src={icon}
                            style={{ maxWidth: "2.5%", height: "auto",marginLeft:"4vw" }}
                        />
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Modify</MenuItem>
                            <MenuItem onClick={handleClose}>View</MenuItem>
                            <MenuItem onClick={handleClose}>Add</MenuItem>
                        </Menu>
                    </div>
                    <div className='USRnew-top-box'>
                        <div>Concept</div>
                        
                        <img aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            src={icon}
                            style={{ maxWidth: "2.5%", height: "auto",marginLeft:"4vw" }}
                        />
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Modify</MenuItem>
                            <MenuItem onClick={handleClose}>View</MenuItem>
                            <MenuItem onClick={handleClose}>Add</MenuItem>
                        </Menu>
                    </div>
                    <div className='USRnew-top-box'>
                        <div>Concept</div>
                        
                        <img aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            src={icon}
                            style={{ maxWidth: "2.5%", height: "auto",marginLeft:"4vw" }}
                        />
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Modify</MenuItem>
                            <MenuItem onClick={handleClose}>View</MenuItem>
                            <MenuItem onClick={handleClose}>Add</MenuItem>
                        </Menu>
                    </div>
                    <div className='USRnew-top-box'>
                        <div>Concept</div>
                        
                        <img aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            src={icon}
                            style={{ maxWidth: "2.5%", height: "auto",marginLeft:"4vw" }}
                        />
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Modify</MenuItem>
                            <MenuItem onClick={handleClose}>View</MenuItem>
                            <MenuItem onClick={handleClose}>Add</MenuItem>
                        </Menu>
                    </div>
                    <div className='USRnew-top-box'>
                        <div>Concept</div>
                        
                        <img aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            src={icon}
                            style={{ maxWidth: "2.5%", height: "auto",marginLeft:"4vw" }}
                        />
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Modify</MenuItem>
                            <MenuItem onClick={handleClose}>View</MenuItem>
                            <MenuItem onClick={handleClose}>Add</MenuItem>
                        </Menu>
                    </div>
                    <div className='USRnew-top-box'>
                        <div>Concept</div>
                        
                        <img aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            src={icon}
                            style={{ maxWidth: "2.5%", height: "auto",marginLeft:"4vw" }}
                        />
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Modify</MenuItem>
                            <MenuItem onClick={handleClose}>View</MenuItem>
                            <MenuItem onClick={handleClose}>Add</MenuItem>
                        </Menu>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className='USRnew-top-box'>Concept</div>

                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className='USRnew-top-box'>Index</div>
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className='USRnew-top-box'>Sem. Cat</div>
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className='USRnew-top-box'>G.N.P</div>
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className='USRnew-top-box'>Dep-Rel</div>
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className='USRnew-top-box'>Discourse</div>
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className='USRnew-top-box'>Speaker view</div>
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className='USRnew-top-box'>Scope</div>
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className='USRnew-top-box'>Sentence Type</div>
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className='USRnew-top-box'>Construction</div>
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                    <input type="text"
                        value={text}
                        onChange={handleInputChange} className='USRnew-top-box-edit' />
                </div>
            </div>
            <br />
            <br />
            <br />
        </>
    );
}