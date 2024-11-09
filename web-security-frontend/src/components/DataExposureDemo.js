import React, { useState } from 'react';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl);

const DataExposureDemo = () => {
  const [isVulnerable, setIsVulnerable] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/data-exposure`, {
        params: { vulnerable: isVulnerable }
      });
      setData(response.data);
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
    </div>
  );
};

export default DataExposureDemo;
