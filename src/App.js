import logo from './logo.svg';
import './App.css';
import {useState} from "react";




function App() {
    let [calc, setCalc] = useState({
        binaerAusgabe: 0
    })
    function umrechnung() {
        console.log("Test");
        setCalc({
            ...calc,
            binaerAusgabe: calc.binaerAusgabe+=10
        })
        // binaerAusgabe = binaerAusgabe+10
    }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="Input">
              <label>
                  Zahl:
                  <input type="number" name="number" />
              </label>
              <input type="button" value="Submit" onClick={umrechnung} />
      </div>
        <div className="Output">
            <p>Ausgabe {calc.binaerAusgabe}</p>
        </div>
    </div>
  );
}

export default App;
