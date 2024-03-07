import { useState } from "react";
import "./App.css";
import usePasswordGenerator from "./hooks/use-password-generator";
import PasswordStrengthChecker from "./components/PasswordStrengthChecker";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import { data } from "./utils/checkBoxdata";

function App() {
  const [length, setLength] = useState(4);
  const [copied, setCopied] = useState(false);
  const [checkboxData, setCheckboxData] = useState(data);

  const handleCheckbox = (index) => {
    // console.log("changed")
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[index].state = !updatedCheckboxData[index].state;
    setCheckboxData(updatedCheckboxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const { password, error, generatePassword } = usePasswordGenerator();

  return (
    <div className="main-container">
      {password && (
        // password and copy button
        <div className="header">
          <div className="title">Password: {password}</div>
          <Button
            text={copied ? "copied" : "copy"}
            className={"copyBtn"}
            onClick={handleCopy}
          />
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
          <CheckBox
            key={i}
            title={checkbox.title}
            onChange={() => handleCheckbox(i)}
            state={checkbox.state}
          />
        ))}
      </div>

      {/* password strength */}
      <PasswordStrengthChecker password={password} />

      {/* error handling */}

      {error && <div className="errorMsg">{error}</div>}
      {/* generate button */}
      <Button
        className="generateBtn"
        text="Generate Password"
        onClick={() => generatePassword(checkboxData, length)}
      />
    </div>
  );
}

export default App;
