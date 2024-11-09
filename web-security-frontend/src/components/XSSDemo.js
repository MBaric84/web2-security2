import React, { useState } from "react";
import axios from "axios";

const XSSDemo = () => {
    const [message, setMessage] = useState("");
    const [vulnerableResponse, setVulnerableResponse] = useState("");
    const [safeResponse, setSafeResponse] = useState("");

    const handleVulnerableSubmit = async () => {
        try{
            const response = await axios.get(`http://localhost:3000/xss/vulnerable`, {params:{message},});
            setVulnerableResponse(response.data);
        } catch (error) {
            console.error("Error calling vulnerable endpoint", error);
        }
    };
    const handleSafeSubmit = async () => {
        try{
            const response = await axios.get(`http://localhost:3000/xss/safe`, {params:{message},});
            setSafeResponse(response.data);
        } catch (error) {
            console.error("Error calling safe endpoint", error);
        }
    };
        return (
            <div>
            <h2>Cross-Site Scripting (XSS) Demo</h2>
            <input
              type="text"
              placeholder="Enter message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleVulnerableSubmit}>Test Vulnerable Endpoint</button>
            <button onClick={handleSafeSubmit}>Test Safe Endpoint</button>
            <div>
              <h3>Vulnerable Response:</h3>
              <div dangerouslySetInnerHTML={{ __html: vulnerableResponse }} />
            </div>
            <div>
              <h3>Safe Response:</h3>
              <div>{safeResponse}</div>
            </div>
          </div>
        );
        }

export default XSSDemo;