import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./stores/canvasStore";

function App() {
  const dispatch = useDispatch();
  const canvas = useSelector((state) => state.canvas.data);
  console.log("canvas", canvas);

  useEffect(() => {
    axios
      .get("https://recruitment01.vercel.app/api/init")
      .then((response) => console.log("response1", response))
      .catch((error) => console.log(error));

    axios
      .get(
        "https://recruitment01.vercel.app/api/project/ckztp9q9x000009jwbjxofab9-2000804180586517"
      )
      .then((response) => {
        console.log("response2", response);
        dispatch(setData(response.data));
      })
      .catch((error) => console.log(error));
  }, []);

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
