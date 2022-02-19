import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layout";
import { Home } from "./pages";

function App() {
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
