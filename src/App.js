import React, { useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState("Darshan");

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const themeStyles = {
    Darshan: {
      backgroundColor: "#87CEEB",
      text: "Hi , I am Darshan .Welcome to my theme.",
    },
    Manjesh: {
      backgroundColor: "#FFD700",
      text: "Hi ,I am Manjesh .Welcome to my theme.",
    },
  };

  return (
    <div className="App">
      <h1>Theme Change</h1>

      {/* Theme options */}
      <div style={{ marginBottom: "20px" }}>
        <span style={{ fontSize: "18px", fontWeight: "bold" }}>Theme: </span>
        <select value={theme} onChange={handleThemeChange}>
          <option value="Darshan">Darshan</option>
          <option value="Manjesh">Manjesh</option>
        </select>
      </div>

      {/* Box that changes with theme */}
      <div
        style={{
          padding: "30px",
          color: "#333",
          backgroundColor: themeStyles[theme].backgroundColor,
          borderRadius: "15px",
        }}
      >
        <p style={{ fontSize: "20px" }}>{themeStyles[theme].text}</p>
      </div>
    </div>
  );
}

export default App;
