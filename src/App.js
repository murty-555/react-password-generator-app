import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(0);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: true },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  const handleCheckbox = (index) => {
    // console.log("changed")
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[index].state = !updatedCheckboxData[index].state;
    setCheckboxData(updatedCheckboxData);
  };

  return (
    <div className="main-container">
      <div className="header">
        <div className="title">Jmsl47&#@</div>
        <button className="copyBtn">copy</button>
      </div>
      {/* character length */}
      <div className="charLength">
        <span className="char-length-label">
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          className="range"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          min="4"
          max="20"
        />
      </div>

      {/* checkboxes */}
      <div className="checkBoxes">
        {checkboxData.map((checkbox, i) => (
          <div key={i}>
            <input
              type="checkbox"
              className="checkbox"
              onChange={() => handleCheckbox(i)}
              checked={checkbox.state}
            />
            <label>{checkbox.title}</label>
          </div>
        ))}
      </div>

      {/* password strength */}
      {/* generate button */}
      <button className="generateBtn">Generate Password</button>
    </div>
  );
}

export default App;
