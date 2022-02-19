import React from "react";
import Header from "./components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="app-container">{children}</div>
    </>
  );
};

export default Layout;
