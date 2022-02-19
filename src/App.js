import axios from "axios";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    axios
      .get("https://recruitment01.vercel.app/api/init")
      .then((response) => console.log("response1", response))
      .catch((error) => console.log(error));

    axios
      .get(
        "https://recruitment01.vercel.app/api/project/ckztp9q9x000009jwbjxofab9-2000804180586517"
      )
      .then((response) => console.log("response2", response))
      .catch((error) => console.log(error));

    // "ckztp9q9x000009jwbjxofab9-2000804180586517"
    // "ckztpae6z000109jw9rko9rne-9972412239002524"
  });
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
    </div>
  );
}

export default App;
