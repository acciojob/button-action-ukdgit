import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const [flag, setFlag] = useState(false);

  return (
    <div className="App" id="main">
      <p id="para" className={flag ? "show" : "hide"}>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
      <button id="click" onClick={() => setFlag(!flag)}>
        Click
      </button>
    </div>
  );
}

export default App;
