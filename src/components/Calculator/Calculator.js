import { useState } from "react";
import './Calculator.css';

function Calculator() {
  const [name, setName] = useState("");

  return (
    <main className="Calculator">
      <h1>Tip Calculator</h1>

      <p>Total Per Person:</p>
      <div className="display">0.00</div>

      <p>Tip Per Person:</p>
      <div className="display">0.00</div>

      <p>Bill:</p>
      <input
        type="text"
        value={name}
        onChange={(e) => {setName(e.target.value)}}
      />

      <p>Tip Percentage:</p>
      <input
        type="text"
        value={name}
        onChange={(e) => {setName(e.target.value)}}
      />

      <p>Number of People:</p>
      <input
        type="text"
        value={name}
        onChange={(e) => {setName(e.target.value)}}
      />
    </main>
  );
}

export default Calculator
