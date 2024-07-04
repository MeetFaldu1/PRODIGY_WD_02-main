import { useState } from "react";
import "./App.css";
import Stopwatch from "./Components/Stopwatch";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Stopwatch />
        </header>
      </div>
      
    </>
  );
}

export default App;
