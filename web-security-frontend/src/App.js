import React from 'react';
import XSSDemo from './components/XSSDemo';
import DataExposureDemo from './components/DataExposureDemo';
console.log(process.env.REACT_APP_API_URL);
function App() {
  return (
    <div>
      <h1>Web Security Demo</h1>
      <XSSDemo />
      <DataExposureDemo />
    </div>
  );
}

export default App;