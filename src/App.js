import axios from "axios";
import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setData } from "./stores/canvasStore";

import Layout from "./layout";
import { Home } from "./pages";

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
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route render={() => <Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
