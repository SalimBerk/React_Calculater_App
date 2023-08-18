import { useState } from "react";
import "./App.css";

function App() {
  const [firstvalue, firstSetValue] = useState(0);
  const [secondvalue, secondSetValue] = useState(0);
  const [conclusion, setConclusion] = useState(0);
  const handleInputfirst = (event) => {
    console.log(event.target.value);
    firstSetValue(parseFloat(event.target.value));
  };
  const handleInputsecond = (event) => {
    console.log(event.target.value);
    secondSetValue(parseFloat(event.target.value));
  };
  const handleSumClick = () => {
    console.log(setConclusion(parseFloat(firstvalue + secondvalue)));
  };
  const handleSubtractionClick = () => {
    console.log(setConclusion(parseFloat(firstvalue - secondvalue)));
  };
  const handleDivideClick = () => {
    console.log(setConclusion(parseFloat(firstvalue / secondvalue)));
  };
  const handleMultiClick = () => {
    console.log(setConclusion(parseFloat(firstvalue * secondvalue)));
  };
  return (
    <div className="App">
      <div className="form">
        <h1 style={{ fontWeight: "bolder" }}>CALCULATER</h1>
        <div className="form-item">
          <label
            style={{
              marginBottom: "1rem",
              fontSize: "35px",
              textShadow: "2px 2px white",
              color: "brown",
            }}
          >
            1.Değer
          </label>
          <input
            value={firstvalue}
            type="number"
            onChange={handleInputfirst}
          ></input>
        </div>
        <div className="form-item">
          <label
            style={{
              marginBottom: "1rem",
              fontSize: "35px",
              textShadow: "2px 2px white",
              color: "brown",
            }}
          >
            2.Değer
          </label>
          <input
            value={secondvalue}
            onChange={handleInputsecond}
            type="number"
          ></input>
        </div>
        <div className="button-list">
          <div>
            <button className="button-list-item" onClick={handleSumClick}>
              +
            </button>
          </div>
          <div>
            <button
              className="button-list-item"
              onClick={handleSubtractionClick}
            >
              -
            </button>
          </div>
          <div>
            <button className="button-list-item" onClick={handleDivideClick}>
              /
            </button>
          </div>
          <div>
            <button className="button-list-item" onClick={handleMultiClick}>
              *
            </button>
          </div>
        </div>
        <p style={{ fontSize: "30px", fontWeight: "bolder" }}>
          Result:<span className="result">{conclusion}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
