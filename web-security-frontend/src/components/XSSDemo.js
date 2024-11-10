import React, { useState } from "react";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const XSSDemo = () => {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");
    const [isVulnerable, setIsVulnerable] = useState(false);
    const [log, setLog] = useState([]);

    const handleSubmit = async () => {
        try {
            const url = `${apiUrl}/xss`;
            const params = { 
                message: message,
                vulnerable: isVulnerable 
            };
            setLog(prevLog => [...prevLog, `Requesting XSS test with message: ${message}`]);

            const response = await axios.get(url, { params });
            setResponse(response.data);

            setLog(prevLog => [...prevLog, `Received response: ${response.data}`]);

            // Trigger alert if vulnerable
            if (isVulnerable && response.data.includes("<script>")) {
                setTimeout(() => {
                    alert("XSS Attack Detected: " + document.cookie);
                }, 500);
            }
        } catch (error) {
            console.error("Error fetching XSS data", error);
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
            <label>
              Enable XSS Vulnerability
              <input
                type="checkbox"
                checked={isVulnerable}
                onChange={() => setIsVulnerable(!isVulnerable)}
              />
            </label>
            <button onClick={handleSubmit}>
              {isVulnerable ? "Test Vulnerable Response" : "Test Safe Response"}
            </button>
            <div>
              <h3>{isVulnerable ? "Vulnerable Response:" : "Safe Response:"}</h3>
              <div dangerouslySetInnerHTML={{ __html: response }} />
            </div>
            <h4>Action Log:</h4>
            <ul>
              {log.map((entry, index) => <li key={index}>{entry}</li>)}
            </ul>
        </div>
    );
};

export default XSSDemo;
