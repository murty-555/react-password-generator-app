import './App.css';

function App() {
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
      {/* password strength */}
      {/* generate button */}
    </div>
  );
}

export default App;
