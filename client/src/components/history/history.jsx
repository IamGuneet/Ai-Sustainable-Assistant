import "./history.css";
import React, { useEffect, useState } from 'react';

const LogHistory = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/logged/history", {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          },
        });

        if (response.status === 200) {
            const data = await response.json();
          setLogs(data);
          console.log(logs);
        } else {
            console.log('error in redirection');
            //   window.location.href = 'http://127.0.0.1:5173/logged/bad';
        }
    } catch (error) {
        console.error(error);
    }
    // console.log(logs);
    };

    fetchData();
  }, []); // Ensure that the useEffect dependency array is empty to run the effect only once on component mount

  return (
    <div>
     <h1 className="display-4 mt-3">Your Carbon Footprint History</h1>
              <ul className="ul">
        {logs.map((log, index) => (
          <li key={index} className="li">
            <span style={{ fontWeight: 'bold',textDecoration:'none' }}>{new Date(log.createdDate).toLocaleDateString()} - Carbon Footprint:</span>{' '}
            {log.Carbon.substring(0,5)} kg
          </li>
        ))}
      </ul>
      <button className="btn btn-primary b" >
           <a href='/logged/success'>
            DashBoard
           </a>
          </button>

    </div>
  );
};

export default LogHistory;
