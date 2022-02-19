import React from "react";
import Header from "./components/Header";

const Layout = ({ children }) => {
  console.log("children", children);
  return (
    <>
      <Header />
      <div className="app-container">{children}</div>
    </>
  );
};

export default Layout;
