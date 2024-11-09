import React, { useState } from 'react';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl);

const DataExposureDemo = () => {
  const [vulnerableData, setVulnerableData] = useState(null);
  const [safeData, setSafeData] = useState(null);

  const fetchVulnerableData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/data-exposure/vulnerable`);
      setVulnerableData(response.data);
    } catch (error) {
      console.error("Error fetching vulnerable data", error);
    }
  };

  const fetchSafeData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/data-exposure/safe`);
      setSafeData(response.data);
    } catch (error) {
      console.error("Error fetching safe data", error);
    }
  };

  return (
    <div>
      <h2>Sensitive Data Exposure Demo</h2>
      <button onClick={fetchVulnerableData}>Fetch Vulnerable Data</button>
      <button onClick={fetchSafeData}>Fetch Safe Data</button>
      <div>
        <h3>Vulnerable Data:</h3>
        <pre>{JSON.stringify(vulnerableData, null, 2)}</pre>
      </div>
      <div>
        <h3>Safe Data:</h3>
        <pre>{JSON.stringify(safeData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default DataExposureDemo;
