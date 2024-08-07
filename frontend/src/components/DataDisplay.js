import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define inline styles
const dataDisplayStyle = {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
};

const h2Style = {
    color: '#333',
};

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
};

const thStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
};

const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
};

function DataDisplay() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    if (data.length === 0) {
        return (
            <div style={dataDisplayStyle}>
                <h2 style={h2Style}>No Data Available</h2>
            </div>
        );
    }

    // Extract keys for table headers
    const headers = Object.keys(data[0]);

    return (
        <div style={dataDisplayStyle}>
            <h2 style={h2Style}>Data</h2>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} style={thStyle}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            {headers.map((header, idx) => (
                                <td key={idx} style={tdStyle}>{item[header]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataDisplay;
