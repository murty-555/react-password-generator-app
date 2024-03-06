import { useState } from "react";
import "./App.css";
import usePasswordGenerator from "./hooks/use-password-generator";

function App() {
  const [length, setLength] = useState(4);
  const [copied, setCopied] = useState(false);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: true },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  const { password, error, generatePassword } = usePasswordGenerator();

  const handleCheckbox = (index) => {
    // console.log("changed")
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[index].state = !updatedCheckboxData[index].state;
    setCheckboxData(updatedCheckboxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true)
    setTimeout(() => {setCopied(false)},1000)
  }

  return (
    <div className="main-container">
      {password && (
        <div className="header">
          <div className="title">{password}</div>
          <button className="copyBtn" onClick={handleCopy}>{copied ? 'copied': 'copy'}</button>
        </div>
      )}
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

      {/* error handling */}

      {error && <div className="errorMsg">{error}</div>}
      {/* generate button */}
      <button
        className="generateBtn"
        onClick={() => generatePassword(checkboxData, length)}
      >
        Generate Password
      </button>
    </div>
  );
}

export default App;
