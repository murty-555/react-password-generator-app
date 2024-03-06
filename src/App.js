import './App.css';

function App() {
  const checkBoxes = [
    {title: "Include Uppercase Letters", state: false},
    {title: "Include Lowercase Letters", state: false},
    {title: "Include Numbers", state: false},
    {title: "Include Symbols", state: false},
  ]
  return (
    <div className='main-container'>
      <div className='header'>
        <div className='title'>Jmsl47&#@</div>
        <button className='copyBtn'>copy</button>
      </div>
      {/* character length */}
      <div className='charLength'>
        <span className='char-length-label'>
          <label>Character Length</label>
          <label>4</label>
        </span>
        <input type='range' className='range' min="4" max="20" />
      </div>

      {/* checkboxes */}
      <div className='checkBoxes'>
        {checkBoxes.map((checkbox,i) => (
          <div key={i}>
            <input type="checkbox" className='checkbox' checked={checkbox.state}/>
            <label>{checkbox.title}</label>
          </div>
        ))}
      </div>

      {/* password strength */}
      {/* generate button */}
      <button className='generateBtn'>Generate Password</button>
    </div>
  );
}

export default App;
