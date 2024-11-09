// src/App.js
import React from 'react';
import XSSDemo from './components/XSSDemo';
import DataExposureDemo from './components/DataExposureDemo';

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

