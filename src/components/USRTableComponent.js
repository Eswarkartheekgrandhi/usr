import React, { useState, useEffect } from 'react';
import "../styles/USRtablenew.css";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import icon from "../images/white.png";
import { BASE_URL } from './config.js';

export default function App() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const [data, setData] = useState([]);
    const [n, setN] = useState(0);
    const [columnEditable, setColumnEditable] = useState(false); // Track if the column is editable

    const handleInputChange = (event, rowIndex, field) => {
        if (columnEditable) { // Check if the column is editable
            const newData = [...data];
            newData[rowIndex][field] = event.target.value;
            setData(newData);
        }
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (action) => {
        if (action === "Modify") {
            setColumnEditable(true); // Make the whole column editable
        } else if (action === "View") {
            setColumnEditable(false); // Keep the column readonly
        } else if (action === "Add") {
            // Add a new column to the right
            const newData = [...data];
            const newColumnName = `NewColumn${n + 1}`;
            newData.forEach((item) => (item[newColumnName] = ""));
            setData(newData);
            setN(n + 1);
        }
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                console.error('Token not found in localStorage');
                return;
            }

            const requestBody = {
                "uploadID": "10011",
                "sentenceID": "3a"
            };

            try {
                const response = await fetch(BASE_URL+"/usr/getData", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-access-token': token,
                    },
                    body: JSON.stringify(requestBody)
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const responseData = await response.json();
                setData(responseData.data);
                setN(responseData.data.length);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", paddingBottom: "1vh", fontWeight: "700" }}>USR Table</div>
            <div className='USRnew-table-box'>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    {Array.from({ length: n + 1 }).map((_, index) => (
                        <div className='USRnew-top-box' key={index}>
                            <div>Concept</div>
                            <img
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                src={icon}
                                style={{ maxWidth: "2.5%", height: "auto", marginLeft: "4vw" }}
                            />
                            <Menu
                                id={`basic-menu-${index}`}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': `basic-button-${index}`,
                                }}
                            >
                                <MenuItem onClick={() => handleMenuItemClick('Modify')}>Modify</MenuItem>
                                <MenuItem onClick={() => handleMenuItemClick('View')}>View</MenuItem>
                                <MenuItem onClick={() => handleMenuItemClick('Add')}>Add</MenuItem>
                            </Menu>
                        </div>
                    ))}
                </div>
                {data.length > 0 && Object.keys(data[0]).map((field, columnIndex) => (
                    <div style={{ display: "flex", flexDirection: "row" }} key={field}>
                        <div className='USRnew-top-box'>{field}</div>
                        {data.map((item, rowIndex) => (
                            <input
                                key={`${field}-${rowIndex}`}
                                type="text"
                                value={item[field]}
                                onChange={(event) => handleInputChange(event, rowIndex, field)}
                                readOnly={!columnEditable} // Make the input readonly based on columnEditable
                                className='USRnew-top-box-edit'
                            />
                        ))}
                    </div>
                ))}
            </div>
            <br />
            <br />
            <br />
        </>
    );
}
