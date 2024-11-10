import React, { useState } from 'react';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const DataExposureDemo = () => {
  const [isVulnerable, setIsVulnerable] = useState(false);
  const [data, setData] = useState(null);
  const [log, setLog] = useState([]);

  const fetchData = async () => {
    try {
      setLog(prevLog => [...prevLog, `Fetching data with vulnerability: ${isVulnerable}`]);

      const response = await axios.get(`${apiUrl}/data-exposure`, {
        params: { vulnerable: isVulnerable }
      });
      setData(response.data);

      setLog(prevLog => [...prevLog, `Received data: ${JSON.stringify(response.data)}`]);

    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  return (
    <div>
      <h2>Sensitive Data Exposure Demo</h2>
      
      <label>
        Enable Data Exposure Vulnerability
        <input
          type="checkbox"
          checked={isVulnerable}
          onChange={() => setIsVulnerable(!isVulnerable)}
        />
      </label>
      
      <button onClick={fetchData}>
        {isVulnerable ? 'Fetch Vulnerable Data' : 'Fetch Safe Data'}
      </button>
      
      <h3>{isVulnerable ? 'Vulnerable Data:' : 'Safe Data:'}</h3>
      <pre>{data ? JSON.stringify(data, null, 2) : 'No data fetched yet'}</pre>

      <h4>Action Log:</h4>
      <ul>
        {log.map((entry, index) => <li key={index}>{entry}</li>)}
      </ul>
    </div>
  );
};

export default DataExposureDemo;