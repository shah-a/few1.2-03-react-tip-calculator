import { useState } from "react";
import './Calculator.css';

function Calculator() {
  const [billInput, setBillInput] = useState(10.00.toFixed(2));
  const [tipInput, setTipInput] = useState(15);
  const [peopleInput, setPeopleInput] = useState(2);

  const billValue = parseFloat(billInput);
  const tipValue = parseFloat(tipInput);
  const numPeople = parseInt(peopleInput);

  const billDisplay = billValue * (1 + tipValue/100) / numPeople;
  const tipDisplay = billValue * (tipValue/100) / numPeople;

  return (
    <main className="Calculator">
      <h1>Tip Calculator</h1>
      <p>Total Per Person:</p>
      <div className="display"><strong>{billDisplay.toFixed(2)}</strong></div>
      <p>Tip Per Person:</p>
      <div className="display">{tipDisplay.toFixed(2)}</div>
      <p>Bill:</p>
      <input
        type="text"
        value={billInput}
        onChange={(e) => {setBillInput(e.target.value)}}
      />
      <p>Tip Percentage:</p>
      <input
        type="text"
        value={tipInput}
        onChange={(e) => {setTipInput(e.target.value)}}
      />
      <p>Number of People:</p>
      <input
        type="text"
        value={peopleInput}
        onChange={(e) => {setPeopleInput(e.target.value)}}
      />
    </main>
  );
}

export default Calculator
